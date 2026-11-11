# DS4Games — sitio web

Sitio de DS4Games: Olympikos, Les Secrets de la Tour Eiffel y 1812, en español, francés e inglés.

Es un sitio estático: HTML, CSS y un poco de JavaScript, sin dependencias ni servidor. Carga rápido y se puede alojar gratis en GitHub Pages.

## Ver el sitio

Una vez activado GitHub Pages (ver abajo), el sitio queda en:

**https://simonet46.github.io/ds4games/**

- Español: `/`
- Français: `/fr/`
- English: `/en/`

## Activar GitHub Pages (una sola vez)

1. En GitHub, abrí el repositorio → **Settings** → **Pages**.
2. En **Build and deployment**, elegí **Deploy from a branch**.
3. Branch: **main**, carpeta: **/docs**. Guardá.
4. En uno o dos minutos el sitio aparece en la dirección de arriba.

## Pasar www.ds4games.com de Wix a esta web

Hacelo en este orden: primero GitHub, después el DNS. Así nadie puede tomar el dominio mientras cambia.

**1. GitHub (2 minutos)**

1. Repositorio → **Settings** → **Pages** → **Custom domain**: escribí `www.ds4games.com` y tocá **Save**. GitHub crea el archivo `docs/CNAME`.
2. Recomendado: en tu perfil → **Settings** → **Pages** → **Add a domain**, agregá `ds4games.com`. GitHub te da un registro `TXT` para probar que el dominio es tuyo. Lo cargás en el paso 2 y después tocás **Verify**.

Otra forma de hacer el punto 1: en `src/data.mjs` poné `domain: "www.ds4games.com"`, corré `node build.mjs` y subí los cambios.

**2. Wix: registros DNS (10 minutos)**

En Wix → **Dominios** → menú **⋯** al lado de `ds4games.com` → **Administrar registros DNS**:

| Tipo | Host | Valor |
|---|---|---|
| A | `@` (ds4games.com) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `simonet46.github.io` |
| TXT | el que te dio GitHub en el paso 1.2 | el valor que te dio GitHub |

- Borrá los registros A y CNAME viejos que apuntan a Wix. Si quedan, chocan con los nuevos y GitHub no puede crear el certificado HTTPS.
- **No borres** los registros `MX` ni otros `TXT`: son los del correo.
- Si Wix no te deja editar los registros porque el dominio está conectado al sitio, primero desconectalo del sitio (en la misma pantalla de Dominios).

**3. Esperar y activar HTTPS**

Los cambios de DNS tardan de unos minutos a 24 horas. Cuando en **Settings → Pages** aparezca "DNS check successful", marcá **Enforce HTTPS**.

**Qué hace la web sola cuando el dominio cambia**

- Las direcciones viejas de Wix (`/olympicos`, `/los-secretos-de-la-torre-eiffel`, `/product-page/...`, `/rules`, `/contacto`, también en `/fr/` y `/en/`) redirigen a las páginas nuevas, así los links viejos, los QR y Google siguen llegando.
- La tienda de Wix deja de existir. Mientras no haya link de pago de Stripe, el botón pasa a **Pedir por email** (abre un correo a juegosds4games@gmail.com con el nombre del juego). Olympikos en Argentina sigue yendo a Toyco.
- Después del cambio, corré `node build.mjs` y subí los cambios: toma el dominio de `docs/CNAME` y actualiza el canonical, el sitemap y las imágenes al compartir.

## Cambiar textos, precios o links

Todo el contenido está en `src/`:

| Archivo | Qué tiene |
|---|---|
| `src/data.mjs` | Precios, links de compra, link de Toyco para Argentina, tipo de cambio a pesos, envío a Argentina, PDFs, videos e imágenes de cada juego |
| `src/i18n/es.mjs` | Todos los textos en español |
| `src/i18n/fr.mjs` | Todos los textos en francés |
| `src/i18n/en.mjs` | Todos los textos en inglés |

Después de editar, generá el sitio de nuevo:

```bash
node build.mjs
```

Eso reescribe las páginas en `docs/`. Hace falta Node 18 o más nuevo.

## Compra según el país

El botón **Comprar** se adapta a quien visita la página (se detecta por la zona horaria y se puede cambiar con el selector "Comprás desde"):

- **Argentina:** Olympikos lleva a [Toyco](https://toyco.com.ar/productos/olympikos/). Los otros juegos muestran el precio aproximado en pesos y el envío desde Francia (20 €).
- **Francia y otros países:** lleva a la tienda, con envío desde Montpellier.

## Agregar o cambiar imágenes

Las imágenes se convierten a WebP en varios tamaños para que la web cargue rápido:

1. Poné los archivos originales en una carpeta (por ejemplo `~/ds4-originales`). Pueden estar en subcarpetas: en `src` va la ruta desde esa carpeta (por ejemplo `1812 juego/cartas filas 1812/…png`). En la Mac "Cykeros" esa carpeta es `~/Documents/DS4 games cyqueros`, con `1812 juego/`, `secrets de la tour eiffel/` y `olympikos (Drive)/`.
   Si las cartas están en un PDF de impresión, primero pasalas a PNG (solo en Mac): `swift tools/pdf_to_png.swift <archivo.pdf> <carpeta> 1440`.
2. En `tools/images.json`, agregá o cambiá la entrada: nombre final, archivo original y anchos.
3. Generá las versiones livianas y las imágenes para compartir. Las imágenes cuyo original no está en la carpeta no se tocan, así que no hace falta tener todos los originales a mano:

```bash
python3 tools/optimize_images.py ~/ds4-originales
```

```bash
python3 tools/make_og.py
```

```bash
node build.mjs
```

Hace falta Python 3 con Pillow (`pip install pillow`).

## Estructura

```
build.mjs              genera las páginas
src/                   datos y textos
tools/                 scripts de imágenes
docs/                  el sitio publicado (lo que sirve GitHub Pages)
  assets/css, js       diseño y comportamiento
  assets/img           imágenes optimizadas
  assets/pdf           reglamentos y libretos
```

## Videos promocionales

En `videos/` están los videos verticales (1080×1920, 30 fps, unos 21 segundos) para Reels, TikTok y Shorts, en español y francés:

| Juego | Español | Francés |
|---|---|---|
| Olympikos | `videos/olympikos-es.mp4` | `videos/olympikos-fr.mp4` |
| Les Secrets de la Tour Eiffel | `videos/tour-eiffel-es.mp4` | `videos/tour-eiffel-fr.mp4` |
| 1812 | `videos/1812-es.mp4` | `videos/1812-fr.mp4` |

No tienen sonido: la música se agrega al publicar, desde la biblioteca de Instagram o TikTok.

Se arman con HTML y se graban cuadro por cuadro. Para cambiar un texto, editá `tools/video/<juego>.html` (los textos de cada idioma están arriba del script) y volvé a grabar:

```bash
node tools/video/render.cjs olympikos es
```

Juegos: `olympikos`, `tour-eiffel`, `1812`. Idiomas: `es`, `fr`, `en`. Hace falta Node, Playwright con Chromium y ffmpeg. Para ver cuadros sueltos antes de grabar todo: `node tools/video/render.cjs olympikos es --still 2,9,15`.

### Videos de cómo se juega

Animaciones minimalistas de unos 45 segundos (1080×1920, sin sonido) que explican cada juego en 5 pasos con las cartas reales:

| Juego | Español | Francés |
|---|---|---|
| Olympikos | `videos/olympikos-reglas-es.mp4` | `videos/olympikos-reglas-fr.mp4` |
| Les Secrets de la Tour Eiffel | `videos/tour-eiffel-reglas-es.mp4` | `videos/tour-eiffel-reglas-fr.mp4` |
| 1812 | `videos/1812-reglas-es.mp4` | `videos/1812-reglas-fr.mp4` |

Los textos están arriba de cada `tools/video/<juego>-reglas.html` (también en inglés). Eiffel y 1812 comparten `tools/video/lib/secret-stories.js`.

En una Mac se pueden grabar sin instalar nada, con `tools/video/render.swift` (usa WebKit y AVFoundation de macOS):

```bash
swiftc -O -o /tmp/ds4-render tools/video/render.swift
```

```bash
/tmp/ds4-render olympikos-reglas es
```

Sirve para todos los videos de `tools/video/`. Para ver cuadros sueltos: `/tmp/ds4-render olympikos-reglas es --still 5,12,20`. Compilalo con la ruta del repositorio tal cual (como arriba, desde la carpeta del repositorio) para que encuentre los HTML.

### Anécdotas de Olympikos, con voz

Cinco anécdotas del libreto de Olympikos contadas en voz alta, de unos 40 segundos (1080×1920, con voz y subtítulos), en español y francés: `videos/olympikos-anecdota-<anécdota>-<idioma>.mp4`.

| Anécdota | Deporte |
|---|---|
| `bradbury` | Patinaje de velocidad: Steven Bradbury, Salt Lake City 2002 |
| `vinci` | Halterofilia: Charles Vinci, Melbourne 1956 |
| `karelin` | Lucha: Aleksandr Karelin |
| `stevenson` | Boxeo: Teófilo Stevenson |
| `im` | Tiro con arco: Im Dong-Hyun, Londres 2012 |

- Los textos están en `tools/video/lib/anecdotas-textos.js`: lo que dice la voz (con los números en letras) y el subtítulo.
- La voz está en `tools/video/voz/`, un MP3 por línea. Se generó con Higgsfield (Text to Speech V2, motor ElevenLabs): en español la voz **Marisol** (`75e72cd5-011b-4130-a474-e8b1ab341f04`) y en francés **Luc** (`04e867c7-9e41-5cff-80d3-5284e74d7bd1`).
- Si cambiás un texto, generá de nuevo ese MP3 con el mismo nombre y volvé a grabar el video. La animación se acomoda sola a la duración de cada audio:

```bash
/tmp/ds4-render olympikos-anecdota-bradbury es
```
