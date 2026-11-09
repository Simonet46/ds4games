"""Convierte las imágenes originales en WebP livianos para la web.

Uso:  python3 tools/optimize_images.py <carpeta-con-originales>
Lee tools/images.json y escribe docs/assets/img/<nombre>-<ancho>.webp
y docs/assets/img/manifest.json (anchos y proporción de cada imagen).

"src" puede incluir subcarpetas ("cartas filas 1812/...png"). Si un original no está
en la carpeta, esa imagen se deja como está: así se pueden sumar imágenes nuevas
sin tener a mano todos los originales.
"""
import json, os, sys
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "docs", "assets", "img")
MANIFEST = os.path.join(OUT, "manifest.json")


def main(src_dir):
    spec = json.load(open(os.path.join(ROOT, "tools", "images.json")))
    manifest = json.load(open(MANIFEST)) if os.path.exists(MANIFEST) else {}
    os.makedirs(OUT, exist_ok=True)
    done_count, missing = 0, []
    for name, cfg in spec.items():
        if name.startswith("_"):
            continue
        path = os.path.join(src_dir, cfg["src"])
        if not os.path.exists(path):
            if name not in manifest:
                missing.append(name)
            continue
        im = Image.open(path)
        alpha = im.mode in ("RGBA", "LA", "P") and "A" in im.convert("RGBA").getbands()
        im = im.convert("RGBA" if alpha else "RGB")
        if alpha and im.getchannel("A").getextrema()[0] >= 200:
            # Casi opaca (bordes apenas transparentes): se aplana sobre blanco y queda más liviana.
            flat = Image.new("RGB", im.size, (255, 255, 255))
            flat.paste(im, mask=im.getchannel("A"))
            im, alpha = flat, False
        if alpha:
            bbox = im.getchannel("A").getbbox()  # recorta bordes transparentes
            if bbox:
                im = im.crop(bbox)
        if cfg.get("crop"):
            im = im.crop(tuple(cfg["crop"]))  # [izquierda, arriba, derecha, abajo] en píxeles
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
        done_count += 1
    json.dump(manifest, open(MANIFEST, "w"), indent=1)
    print(f"{done_count} imágenes generadas, {len(manifest)} en total")
    if missing:
        print("Faltan los originales de:", ", ".join(missing))


if __name__ == "__main__":
    main(sys.argv[1])
