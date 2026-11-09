// Pasa cada página de un PDF a PNG (solo Mac, usa PDFKit).
// Uso: swift tools/pdf_to_png.swift <archivo.pdf> <carpeta-de-salida> [ancho en píxeles, 1440 por defecto]
// Sirvió para las cartas de Olympikos: deportes a 1440 px e indicios a 720 px (pNN.png, una por página).
import AppKit
import PDFKit

let args = CommandLine.arguments
guard args.count >= 3, let doc = PDFDocument(url: URL(fileURLWithPath: args[1])) else {
  print("Uso: swift tools/pdf_to_png.swift <archivo.pdf> <carpeta> [ancho]")
  exit(1)
}
let width = CGFloat(Double(args.count > 3 ? args[3] : "1440") ?? 1440)
try? FileManager.default.createDirectory(atPath: args[2], withIntermediateDirectories: true)
for i in 0..<doc.pageCount {
  guard let page = doc.page(at: i) else { continue }
  let box = page.bounds(for: .mediaBox)
  let size = NSSize(width: width, height: box.height * width / box.width)
  let image = page.thumbnail(of: size, for: .mediaBox)
  guard let tiff = image.tiffRepresentation, let rep = NSBitmapImageRep(data: tiff),
        let png = rep.representation(using: .png, properties: [:]) else { continue }
  try? png.write(to: URL(fileURLWithPath: "\(args[2])/p\(String(format: "%02d", i + 1)).png"))
}
print("\(doc.pageCount) páginas")
