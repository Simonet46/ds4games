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

## Usar tu dominio (cuando lo tengas)

1. En **Settings → Pages → Custom domain**, escribí el dominio (por ejemplo `www.ds4games.com`).
2. En el proveedor del dominio, creá un registro `CNAME` de `www` apuntando a `simonet46.github.io`.
3. En `src/data.mjs`, cambiá `baseUrl` por la nueva dirección y volvé a generar el sitio (ver abajo).

Ojo: los botones **Comprar** hoy apuntan a la tienda de Wix. Si el dominio deja de apuntar a Wix, esa tienda deja de funcionar: antes hay que reemplazar los links por la tienda nueva (Stripe, Shopify u otra) en `src/data.mjs`.

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

1. Poné los archivos originales en una carpeta (por ejemplo `~/ds4-originales`).
2. En `tools/images.json`, agregá o cambiá la entrada: nombre final, archivo original y anchos.
3. Generá las versiones livianas y las imágenes para compartir:

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
