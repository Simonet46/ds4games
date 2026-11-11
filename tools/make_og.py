"""Genera las imágenes para compartir (og-*.jpg), el favicon y el ícono de Apple a partir de docs/assets/img."""
import os
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "docs", "assets", "img")
W, H = 1200, 630


def load(name):
    files = sorted((f for f in os.listdir(IMG) if f.startswith(name + "-") and f.endswith(".webp")),
                   key=lambda f: int(f.rsplit("-", 1)[1].split(".")[0]))
    return Image.open(os.path.join(IMG, files[-1])).convert("RGBA")


def backdrop(colors):
    bg = Image.new("RGB", (W, H), (5, 6, 11))
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    for (x, y, r, c) in colors:
        d.ellipse((x - r, y - r, x + r, y + r), fill=c + (150,))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    bg.paste(glow, (0, 0), glow)
    return bg


def place(canvas, im, h, cx, bottom):
    w = round(im.width * h / im.height)
    im = im.resize((w, h), Image.LANCZOS)
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    ImageDraw.Draw(shadow).ellipse((cx - w // 2, bottom - 20, cx + w // 2, bottom + 30), fill=(0, 0, 0, 170))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    canvas.paste(shadow, (0, 0), shadow)
    canvas.paste(im, (cx - w // 2, bottom - h), im)


def cover(name):
    im = load(name).convert("RGB")
    s = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    x, y = (im.width - W) // 2, (im.height - H) // 2
    im = im.crop((x, y, x + W, y + H))
    dark = Image.new("RGB", (W, H), (5, 6, 11))
    return Image.blend(im, dark, 0.45)


home = backdrop([(250, 120, 300, (123, 92, 255)), (950, 150, 280, (255, 45, 135)), (600, 600, 320, (25, 195, 230))])
place(home, load("arg-box"), 380, 330, 560)
place(home, load("eif-box"), 330, 880, 560)
place(home, load("oly-box"), 470, 600, 590)
home.save(os.path.join(IMG, "og-home.jpg"), quality=86)

for slug, art, box, h in [("olympikos", "oly-marathon", "oly-box", 500), ("tour-eiffel", "eif-components-wood", "eif-box", 420), ("1812", "arg-art", "arg-box", 480), ("2080", "f80-hero", "f80-box", 460)]:
    c = cover(art)
    place(c, load(box), h, 860, 590)
    c.save(os.path.join(IMG, f"og-{slug}.jpg"), quality=86)

logo = load("logo-ds4")
for size, name, bg in [(64, "favicon.png", None), (180, "apple-touch-icon.png", (5, 6, 11))]:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0) if bg is None else bg + (255,))
    pad = 4 if bg is None else 22
    lw = size - 2 * pad
    lh = round(logo.height * lw / logo.width)
    canvas.paste(logo.resize((lw, lh), Image.LANCZOS), (pad, (size - lh) // 2), logo.resize((lw, lh), Image.LANCZOS))
    canvas.save(os.path.join(IMG, name))
print("og listos")
