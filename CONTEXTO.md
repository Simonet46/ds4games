# DS4Games: contexto del proyecto

Resumen de todo lo hablado y hecho hasta el 9 de noviembre de 2026, para seguir en otra conversación.

## Quién y qué

- Diego Simonet: fundador de DS4Games (estudio de juegos de mesa en Montpellier) y CEO de DS CONNECT (iDisko). Exjugador de handball del Montpellier y de la selección argentina.
- Juegos: **Olympikos**, **Les Secrets de la Tour Eiffel** y **1812**.
- Email de contacto de la marca: juegosds4games@gmail.com.

## La web nueva

- Repositorio: `simonet46/ds4games` (público). GitHub Pages publica `main` → `/docs` en https://simonet46.github.io/ds4games/
- Sitio estático en español (raíz), francés (`/fr/`) e inglés (`/en/`). Diseño "vidrio" tipo Apple, liviano.
- `node build.mjs` genera `docs/`. Datos en `src/data.mjs`, textos en `src/i18n/es.mjs`, `fr.mjs` y `en.mjs`.
- Imágenes: `tools/images.json` (nombre → archivo original y anchos) y `python3 -I tools/optimize_images.py <carpeta de originales>`. Esto genera WebP en `docs/assets/img/` y actualiza `manifest.json`. Los originales no se suben al repo.
- Compra según país (`docs/assets/js/site.js`). Detecta Francia, Argentina o resto del mundo por la zona horaria, y se puede cambiar con un selector.
  - Olympikos en Argentina va a Toyco: https://toyco.com.ar/productos/olympikos/
  - En Argentina se muestran pesos aproximados (1750 ARS por euro).
  - Si un juego no tiene link de pago ni tienda, el botón pasa a "Pedir por email".
- Cada juego tiene gráfico de perfil (suerte, lógica, equipo, estrategia, rapidez, conversación), complejidad, número ideal de jugadores, para quién es y mecánicas.

## Decisiones de Diego

- Los tres juegos a **19 €**.
- Todo se envía desde Francia: **Francia 10 €, resto del mundo 12 €, Argentina 20 €**. En Argentina mostrar también el equivalente en pesos.
- Les Secrets de la Tour Eiffel:
  - Competitivo de 3 a 5 jugadores, cooperativo de 2 a 10 ("no hay límite, se habla mucho"), 25 min.
  - La caja está en francés y la web usa los dos nombres. El reglamento va en el idioma que pida el comprador (español o francés).
  - El Lector que descifra el código gana junto al Autor. Si lo descifra en la ronda 5, la última oportunidad, gana solo el Lector y el Autor pierde.
  - **No traducir** su reglamento.
- 1812: el nivel 2 tiene 6 columnas.
- Stripe: usar la cuenta **DS4GAMES** (juegosds4games@gmail.com), nunca la de iDisko.

## Stripe

- El conector solo da acceso al **modo prueba** de la cuenta DS4GAMES. Ya hay 8 links de prueba con productos a 19 €:
  - Olympikos: Francia e internacional.
  - Eiffel: Francia, internacional y Argentina, con un campo para elegir el idioma del reglamento.
  - 1812: Francia, internacional y Argentina.
- El envío va como una línea más del pedido, y cada link limita los países de envío.
- Pendiente:
  1. Acceso al modo real.
  2. Que Diego diga si cobra IVA/TVA.
  3. Recrear los links en modo real.
  4. Cargarlos en `links` de cada juego en `src/data.mjs`.
- Nunca poner links de prueba en la web.

## Videos

- `videos/`: 3 videos verticales (Olympikos, Eiffel, 1812) en español y francés, de unos 21 s, sin sonido.
- Se graban con `node tools/video/render.cjs <juego> <idioma>`, que usa Playwright y ffmpeg.
- Higgsfield (plan Ultra, unos 2.382 créditos). Propuesta en espera del OK de Diego:
  - Sí: música propia para los videos, animar sus propias ilustraciones, fotos de ambiente con la caja real.
  - No: inventar componentes, testimonios falsos ni caras de personas reales.

## Dominio www.ds4games.com

- Hoy sigue en Wix, con la tienda en `/product-page/...`.
- La web ya está preparada para el cambio:
  - Se activa con `domain` en `src/data.mjs` o con `docs/CNAME`.
  - Las direcciones viejas de Wix redirigen a las nuevas.
  - La tienda de Wix se ignora sola cuando el dominio ya apunta a esta web.
- Pasos en el README: dominio en GitHub Pages, registros DNS en Wix y Enforce HTTPS. Falta que Diego los haga.

## Contenido nuevo de 1812 (9 de noviembre de 2026)

- Originales en la Mac "Cykeros": `~/Documents/DS4 games cyqueros/1812 juego/` (caja, cartas de Lector, oníricas, sobres). El repo está clonado al lado, en `ds4games/`.
- La página de 1812 suma tres secciones, armadas desde `rows`, `dreams` y `demo` de `src/data.mjs` (sirven igual para otro juego Secret Stories):
  - **Las 40 cartas de Lector** por pestañas (personajes, situaciones, lugares, comidas). Se usaron las versiones del PDF final de impresión (`cartas lectores 4 copia final.pdf`): el fútbol no está, y el barco es una situación.
  - **16 cartas de Autor** (oníricas) en una tira.
  - **Ronda de prueba**: el ejemplo del reglamento (nivel 3, código 2 4 3 1, cartas oníricas 8, 11, 9 y 29). El visitante elige una carta por fila y recibe el sobre con los aciertos. En la fila de lugares, el barco del ejemplo se cambió por Rosario.
- Galería: se sumaron la ilustración interior de la caja y la contratapa.
- Nombres de cartas para revisar con Diego: "El cacique" (archivo "indio"), "El señor feudal", "El vendedor de velas" (archivo "velero").
- En esta Mac no hay Node instalado: se usó el que trae ChatGPT (`/Applications/ChatGPT.app/Contents/Resources/cua_node/bin/node build.mjs`).

## Pendientes

1. **Imágenes de Olympikos y Les Secrets de la Tour Eiffel** (cartas, cajas): en esta Mac solo están las de 1812. Sumarlas igual que las de 1812, con `tools/images.json` y `tools/optimize_images.py`.
2. **Reglamento de Eiffel en francés**: armar el PDF con las 8 páginas. Hoy `docs/assets/pdf/tour-eiffel-regles-fr.pdf` tiene solo la tapa. No traducir.
3. La tapa de ese reglamento dice "3 à 5 en coopération / 2 à 10 en compétition", al revés de lo que decidió Diego.
4. 1812: en la web, los niveles 2 y 3 quedaron iguales (6 columnas, bandera, 4 turnos). Confirmar con Diego.
5. Página de privacidad y mentions légales (obligatorias en Francia). Hoy `/politicas-de-privacidad` redirige a Contacto.
6. Stripe en modo real y la decisión sobre el IVA.
7. Cambio de dominio.
8. Higgsfield, si Diego lo aprueba.
9. Diego quería armar una carpeta de materiales en la computadora de "Cykeros".

## Para trabajar desde el Mac

- Hace falta: git con sesión de GitHub iniciada, Node 18 o más nuevo y Python 3 con Pillow (`pip3 install pillow`).
- Clonar el repo al lado de la carpeta `ds4`: `git clone https://github.com/simonet46/ds4games.git`
- Las imágenes originales de la carpeta `ds4` no se suben al repo: solo sus versiones WebP.
