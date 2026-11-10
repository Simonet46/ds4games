// Igual que render.cjs, pero solo con lo que trae macOS (WebKit y AVFoundation): sin Node, Playwright ni ffmpeg.
//
//   swift tools/video/render.swift olympikos-reglas es                 -> videos/olympikos-reglas-es.mp4
//   swift tools/video/render.swift olympikos-reglas es --still 2,9,15  -> cuadros de prueba en PNG
//   Opciones: --fps 30  --out <carpeta>
//
// Cada video es un HTML de tools/video/ con window.DURATION y window.render(t) (ver lib/engine.js).
import AppKit
import AVFoundation
import WebKit

let W = 1080, H = 1920
func log(_ s: String) { FileHandle.standardError.write((s + "\n").data(using: .utf8)!) }
enum Cfg {
  static let args = Array(CommandLine.arguments.dropFirst())
  static func opt(_ k: String) -> String? { args.firstIndex(of: k).flatMap { $0 + 1 < args.count ? args[$0 + 1] : nil } }
  static let name = args.first ?? ""
  static let lang = args.count > 1 && !args[1].hasPrefix("--") ? args[1] : "es"
  static let fps = Int(opt("--fps") ?? "30") ?? 30
  // Carpeta de los HTML: --dir, o la de este archivo (como ruta absoluta).
  static let here = URL(fileURLWithPath: opt("--dir") ?? URL(fileURLWithPath: #filePath).deletingLastPathComponent().path).absoluteURL.standardizedFileURL
  static let repo = here.deletingLastPathComponent().deletingLastPathComponent()
  static let outDir = URL(fileURLWithPath: opt("--out") ?? repo.appendingPathComponent("videos").path)
  static let stills = opt("--still")?.split(separator: ",").compactMap { Double($0) }
}
if Cfg.name.isEmpty {
  print("Uso: swift tools/video/render.swift <video> <es|fr|en> [--still t1,t2] [--fps 30] [--out carpeta]")
  exit(1)
}
try? FileManager.default.createDirectory(at: Cfg.outDir, withIntermediateDirectories: true)

@MainActor
final class Renderer: NSObject, WKNavigationDelegate {
  let window: NSWindow
  let web: WKWebView
  var loaded: CheckedContinuation<Void, Never>?

  override init() {
    let cfg = WKWebViewConfiguration()
    cfg.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
    web = WKWebView(frame: NSRect(x: 0, y: 0, width: W, height: H), configuration: cfg)
    window = NSWindow(contentRect: NSRect(x: -20000, y: -20000, width: W, height: H), styleMask: [.borderless], backing: .buffered, defer: false)
    super.init()
    window.contentView = web
    window.orderFrontRegardless()
    web.navigationDelegate = self
  }

  func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) { log("Error al cargar: \(error)"); exit(1) }
  func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) { log("Error al cargar: \(error)"); exit(1) }
  func webViewWebContentProcessDidTerminate(_ webView: WKWebView) { log("WebKit se cerró"); exit(1) }
  func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) { loaded?.resume(); loaded = nil }

  func js(_ body: String, _ a: [String: Any] = [:]) async throws -> Any? {
    try await web.callAsyncJavaScript(body, arguments: a, in: nil, contentWorld: .page)
  }

  // Cuadro actual como imagen de W×H píxeles.
  func frame(at t: Double) async throws -> CGImage {
    // Espera dos cuadros de pintura (con tope) para que WebKit dibuje las imágenes que acaban de aparecer.
    _ = try await js("window.render(t); await new Promise(r => { let n = 0; const tick = () => (++n >= 2 ? r() : requestAnimationFrame(tick)); requestAnimationFrame(tick); setTimeout(r, 120); });", ["t": t])
    let conf = WKSnapshotConfiguration()
    conf.rect = NSRect(x: 0, y: 0, width: W, height: H)
    let img = try await web.takeSnapshot(configuration: conf)
    let ctx = CGContext(data: nil, width: W, height: H, bitsPerComponent: 8, bytesPerRow: 0, space: CGColorSpaceCreateDeviceRGB(),
                        bitmapInfo: CGImageAlphaInfo.noneSkipFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue)!
    var r = NSRect(x: 0, y: 0, width: W, height: H)
    ctx.draw(img.cgImage(forProposedRect: &r, context: nil, hints: nil)!, in: CGRect(x: 0, y: 0, width: W, height: H))
    return ctx.makeImage()!
  }

  func run() async throws {
    let file = Cfg.here.appendingPathComponent("\(Cfg.name).html")
    var comps = URLComponents(url: file, resolvingAgainstBaseURL: false)!
    comps.queryItems = [URLQueryItem(name: "lang", value: Cfg.lang)]
    await withCheckedContinuation { c in loaded = c; web.loadFileURL(comps.url!, allowingReadAccessTo: Cfg.repo) }
    _ = try await js("""
      await document.fonts.ready;
      await Promise.all(Array.from(document.images).map(i => i.decode().catch(() => {})));
      if (window.setup) await window.setup();
    """)
    let duration = (try await js("return window.DURATION;") as? Double) ?? 0
    log("duración \(duration) s")

    if let stills = Cfg.stills {
      for t in stills {
        let img = try await frame(at: t)
        let out = Cfg.outDir.appendingPathComponent("\(Cfg.name)-\(Cfg.lang)-\(String(t).replacingOccurrences(of: ".", with: "_")).png")
        let rep = NSBitmapImageRep(cgImage: img)
        try rep.representation(using: .png, properties: [:])!.write(to: out)
        print(out.path)
      }
      return
    }

    let out = Cfg.outDir.appendingPathComponent("\(Cfg.name)-\(Cfg.lang).mp4")
    try? FileManager.default.removeItem(at: out)
    let writer = try AVAssetWriter(outputURL: out, fileType: .mp4)
    let input = AVAssetWriterInput(mediaType: .video, outputSettings: [
      AVVideoCodecKey: AVVideoCodecType.h264, AVVideoWidthKey: W, AVVideoHeightKey: H,
      AVVideoCompressionPropertiesKey: [AVVideoAverageBitRateKey: 2_500_000, AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel],
    ])
    input.expectsMediaDataInRealTime = false
    let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: input, sourcePixelBufferAttributes: [
      kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA, kCVPixelBufferWidthKey as String: W, kCVPixelBufferHeightKey as String: H,
    ])
    writer.add(input)
    writer.shouldOptimizeForNetworkUse = true
    writer.startWriting()
    writer.startSession(atSourceTime: .zero)
    let n = Int((duration * Double(Cfg.fps)).rounded())
    let t0 = Date()
    for f in 0..<n {
      let img = try await frame(at: Double(f) / Double(Cfg.fps))
      while !input.isReadyForMoreMediaData { try await Task.sleep(nanoseconds: 2_000_000) }
      var pb: CVPixelBuffer?
      CVPixelBufferPoolCreatePixelBuffer(nil, adaptor.pixelBufferPool!, &pb)
      CVPixelBufferLockBaseAddress(pb!, [])
      let ctx = CGContext(data: CVPixelBufferGetBaseAddress(pb!), width: W, height: H, bitsPerComponent: 8, bytesPerRow: CVPixelBufferGetBytesPerRow(pb!),
                          space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.noneSkipFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue)!
      ctx.draw(img, in: CGRect(x: 0, y: 0, width: W, height: H))
      CVPixelBufferUnlockBaseAddress(pb!, [])
      adaptor.append(pb!, withPresentationTime: CMTime(value: CMTimeValue(f), timescale: CMTimeScale(Cfg.fps)))
      if f % 90 == 0 { print("\(Cfg.name)-\(Cfg.lang): \(f)/\(n)") }
    }
    input.markAsFinished()
    await writer.finishWriting()
    if writer.status != .completed { throw writer.error ?? NSError(domain: "render", code: 1) }
    print("\(out.path)  (\(n) cuadros, \(Int(Date().timeIntervalSince(t0))) s)")
  }
}

let app = NSApplication.shared
app.setActivationPolicy(.prohibited)
Task { @MainActor in
  do { try await Renderer().run(); exit(0) } catch { print("Error:", error); exit(1) }
}
app.run()
