// Igual que render.cjs, pero solo con lo que trae macOS (WebKit y AVFoundation): sin Node, Playwright ni ffmpeg.
//
//   swift tools/video/render.swift olympikos-reglas es                 -> videos/olympikos-reglas-es.mp4
//   swift tools/video/render.swift olympikos-reglas es --still 2,9,15  -> cuadros de prueba en PNG
//   Opciones: --fps 30  --out <carpeta>
//
// Cada video es un HTML de tools/video/ con window.DURATION y window.render(t) (ver lib/engine.js).
//
// Voz en off (opcional): si la página define window.VOICE (lista de audios, con rutas desde tools/video/),
// el renderizador mide cada audio y llama a window.setup(duraciones). La página arma su línea de tiempo,
// define window.CUES (segundo en que empieza cada audio) y window.DURATION, y el video sale con la voz mezclada.
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
    // Audios de la voz en off y su duración.
    let voice = ((try await js("return window.VOICE || [];") as? [String]) ?? []).map { Cfg.here.appendingPathComponent($0) }
    var durs: [Double] = []
    for u in voice {
      guard FileManager.default.fileExists(atPath: u.path) else { log("Falta el audio \(u.path)"); exit(1) }
      let f = try AVAudioFile(forReading: u)
      durs.append(Double(f.length) / f.processingFormat.sampleRate)
    }
    _ = try await js("""
      await document.fonts.ready;
      await Promise.all(Array.from(document.images).map(i => i.decode().catch(() => {})));
      if (window.setup) await window.setup(durs);
    """, ["durs": durs])
    let duration = (try await js("return window.DURATION;") as? Double) ?? 0
    let cues = voice.isEmpty ? [] : ((try await js("return window.CUES || [];") as? [Double]) ?? [])
    if cues.count != voice.count { log("window.CUES tiene \(cues.count) tiempos para \(voice.count) audios"); exit(1) }
    log("duración \(duration) s" + (voice.isEmpty ? "" : ", \(voice.count) audios de voz"))

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

    let final = Cfg.outDir.appendingPathComponent("\(Cfg.name)-\(Cfg.lang).mp4")
    let tmp = FileManager.default.temporaryDirectory.appendingPathComponent("ds4-\(Cfg.name)-\(Cfg.lang)-\(getpid())")
    let out = voice.isEmpty ? final : tmp.appendingPathExtension("mp4")
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
    if !voice.isEmpty {
      let m4a = tmp.appendingPathExtension("m4a")
      try mixVoice(voice, cues, duration: duration, to: m4a)
      try await mux(video: out, audio: m4a, to: final)
      try? FileManager.default.removeItem(at: out)
      try? FileManager.default.removeItem(at: m4a)
    }
    print("\(final.path)  (\(n) cuadros, \(Int(Date().timeIntervalSince(t0))) s)")
  }
}

// Mezcla los audios de voz, cada uno en su segundo de inicio, en un solo archivo AAC (mono, 44,1 kHz).
func mixVoice(_ clips: [URL], _ cues: [Double], duration: Double, to url: URL) throws {
  let sr = 44_100.0
  let fmt = AVAudioFormat(commonFormat: .pcmFormatFloat32, sampleRate: sr, channels: 1, interleaved: false)!
  let total = AVAudioFrameCount(duration * sr)
  let mix = AVAudioPCMBuffer(pcmFormat: fmt, frameCapacity: total)!
  mix.frameLength = total
  let m = mix.floatChannelData![0]
  for i in 0..<Int(total) { m[i] = 0 }
  for (u, at) in zip(clips, cues) {
    let f = try AVAudioFile(forReading: u)
    let src = AVAudioPCMBuffer(pcmFormat: f.processingFormat, frameCapacity: AVAudioFrameCount(f.length))!
    try f.read(into: src)
    var buf = src
    if f.processingFormat != fmt {
      let conv = AVAudioConverter(from: f.processingFormat, to: fmt)!
      let dst = AVAudioPCMBuffer(pcmFormat: fmt, frameCapacity: AVAudioFrameCount(Double(src.frameLength) * sr / f.processingFormat.sampleRate) + 4096)!
      var given = false
      var err: NSError?
      conv.convert(to: dst, error: &err) { _, status in
        if given { status.pointee = .endOfStream; return nil }
        given = true; status.pointee = .haveData; return src
      }
      if let err { throw err }
      buf = dst
    }
    let off = Int(at * sr), d = buf.floatChannelData![0]
    for i in 0..<max(0, min(Int(buf.frameLength), Int(total) - off)) { m[off + i] += d[i] }
  }
  let file = try AVAudioFile(forWriting: url, settings: [AVFormatIDKey: kAudioFormatMPEG4AAC, AVSampleRateKey: sr, AVNumberOfChannelsKey: 1, AVEncoderBitRateKey: 128_000],
                             commonFormat: .pcmFormatFloat32, interleaved: false)
  try file.write(from: mix)
}

// Junta el video y el audio en un MP4 sin volver a comprimir.
func mux(video: URL, audio: URL, to url: URL) async throws {
  let comp = AVMutableComposition()
  let v = AVURLAsset(url: video), a = AVURLAsset(url: audio)
  let vt = try await v.loadTracks(withMediaType: .video)[0], at = try await a.loadTracks(withMediaType: .audio)[0]
  let vd = try await v.load(.duration), ad = try await a.load(.duration)
  try comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
    .insertTimeRange(CMTimeRange(start: .zero, duration: vd), of: vt, at: .zero)
  try comp.addMutableTrack(withMediaType: .audio, preferredTrackID: kCMPersistentTrackID_Invalid)!
    .insertTimeRange(CMTimeRange(start: .zero, duration: CMTimeMinimum(vd, ad)), of: at, at: .zero)
  try? FileManager.default.removeItem(at: url)
  let exp = AVAssetExportSession(asset: comp, presetName: AVAssetExportPresetPassthrough)!
  exp.outputURL = url
  exp.outputFileType = .mp4
  exp.shouldOptimizeForNetworkUse = true
  await withCheckedContinuation { c in exp.exportAsynchronously { c.resume() } }
  if exp.status != .completed { throw exp.error ?? NSError(domain: "mux", code: 1) }
}

let app = NSApplication.shared
app.setActivationPolicy(.prohibited)
Task { @MainActor in
  do { try await Renderer().run(); exit(0) } catch { print("Error:", error); exit(1) }
}
app.run()
