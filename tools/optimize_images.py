"""Convierte las imágenes originales en WebP livianos para la web.

Uso:  python3 tools/optimize_images.py <carpeta-con-originales>
Lee tools/images.json y escribe docs/assets/img/<nombre>-<ancho>.webp
y docs/assets/img/manifest.json (anchos y proporción de cada imagen).
"""
import json, os, sys
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "docs", "assets", "img")


def main(src_dir):
    spec = json.load(open(os.path.join(ROOT, "tools", "images.json")))
    manifest = {}
    os.makedirs(OUT, exist_ok=True)
    for name, cfg in spec.items():
        if name.startswith("_"):
            continue
        im = Image.open(os.path.join(src_dir, cfg["src"]))
        alpha = im.mode in ("RGBA", "LA", "P") and "A" in im.convert("RGBA").getbands()
        im = im.convert("RGBA" if alpha else "RGB")
        if alpha:
            bbox = im.getchannel("A").getbbox()  # recorta bordes transparentes
            if bbox:
                im = im.crop(bbox)
        w0, h0 = im.size
        done = []
        for w in cfg["widths"]:
            w = min(w, w0)
            if w in done:
                continue
            h = round(h0 * w / w0)
            out = im.resize((w, h), Image.LANCZOS)
            out.save(os.path.join(OUT, f"{name}-{w}.webp"), "WEBP", quality=78, method=6)
            done.append(w)
        manifest[name] = {"widths": done, "ratio": round(h0 / w0, 4), "alpha": alpha}
    json.dump(manifest, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
    print(f"{len(manifest)} imágenes")


if __name__ == "__main__":
    main(sys.argv[1])
