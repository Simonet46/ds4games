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

- Estado: **modo real activo**. El conector ya ve la cuenta DS4GAMES en modo real (acct_1IHDtgG4uwwQO8xT).
- Los tres juegos cuestan **19 € con IVA incluido**. Productos de Stripe reutilizados: Olympikos `prod_PvjLWgSneiDNnJ`, Eiffel `prod_Pt7mLfyOaF0iP2`, 1812 `prod_Pt7QwwcphoO8g3`, con código fiscal "bienes tangibles" (txcd_99999999). Los precios de 19 € son nuevos; los viejos (16, 18 y 23 €) siguen activos.
- El envío (10 € Francia, 12 € resto, 20 € Argentina) va como una línea más del pedido, con tres productos "Envío ...".
- **Stripe Tax activo** (Diego cobra IVA): sede en Castelnau-le-Lez, registros de Francia (estándar) y OSS de la UE. Los links usan `automatic_tax`. Fuera de la UE no se cobra impuesto.
- Links reales en `src/data.mjs` (`links` de cada juego): Olympikos FR/INT, Eiffel FR/INT/AR, 1812 FR/INT/AR. Olympikos en Argentina va a Toyco. Eiffel lleva un campo para elegir el idioma del reglamento.
- Quedan 5 links viejos de 2024 en la cuenta, con precios viejos y sin envío. No se tocaron por si se usan en eventos.
- Pendiente: hacer una compra de prueba real de un juego y reembolsarla, para verificar el IVA y el envío.

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

## Rondas de prueba de Eiffel y Olympikos (9 de noviembre de 2026)

- Originales en la Mac "Cykeros", en `~/Documents/DS4 games cyqueros/`:
  - `secrets de la tour eiffel/`: las cartas de Lector (las subió Diego) y `cartas autor (Drive)/` con las 8 cartas de Autor que hay en el Drive ("1884 Paris_CO 03…18").
  - `olympikos (Drive)/`: los PDF de impresión bajados del Drive (deportes, indicios, aros, delegaciones, medallas, banderas) y `render/` con sus páginas en PNG (`swift tools/pdf_to_png.swift`).
- Las imágenes ahora se generan desde esa carpeta para los tres juegos: `python3 -E tools/optimize_images.py "~/Documents/DS4 games cyqueros"` (en esta Mac, `-I` no encuentra Pillow). Las rutas de 1812 en `tools/images.json` pasaron a empezar con `1812 juego/`.
- **Les Secrets de la Tour Eiffel** suma las mismas tres secciones que 1812 (`rows`, `dreams` y `demo` en `src/data.mjs`):
  - Las 48 cartas de Lector por pestañas. Había dos repetidas en la carpeta: "TAXISTA" es la misma que "cochere", y "COÑACYHABANO" la misma que "cognac retocado". Se usaron "cochere" y "cognac retocado".
  - 4 cartas de Autor en la tira (las otras 4 están en la ronda).
  - Ronda de prueba con la mesa del ejemplo del reglamento. El reglamento no dice qué cartas de Autor se usaron, así que las pistas las eligió Claude: CO 07 → el lustrabotas, CO 16 (gato negro) → el cabaret, CO 12 (gárgolas) → Notre-Dame, CO 18 → el coñac. Código 5 1 6 3. Son 4 rondas y una última oportunidad: si el Lector acierta ahí, gana solo y el Autor pierde. El Autor "dice" los aciertos con cuatro marcas, porque Eiffel no tiene sobres.
- **Olympikos** suma una tira con 16 de los indicios y una ronda contra el reloj (`clues` y `race` en `src/data.mjs`):
  - La web es el Entrenador. El visitante elige su delegación y, como en la variante para dos, cada 10 segundos una delegación rival juega una carta al azar en cada medalla. El primero que acierta se lleva 2, 3 o 4 puntos; si otro acertó antes, 1.
  - Tres rondas. La primera es el ejemplo del reglamento (el bate, horizontal, para la esgrima en silla de ruedas); las otras pistas las eligió Claude.
- Para revisar con Diego:
  - Las pistas de las dos rondas, que se cambian en `src/data.mjs`.
  - Los nombres en español de "El despertador" (archivo "reveilleur"), "La taxista" ("cochere"), "El cargador de Les Halles" y "La florista" ("florera").

## Videos de cómo se juega (10 de noviembre de 2026)

- `videos/<juego>-reglas-es.mp4` y `-fr.mp4`: animaciones minimalistas de 45 s, 1080×1920, sin sonido, con fondo claro y las cartas reales. Cada una tiene una intro, 5 pasos y un cierre con la caja y ds4games.com.
- Olympikos usa la ronda del ejemplo del reglamento (el bate para la esgrima en silla de ruedas). Eiffel usa la misma mesa y las mismas pistas que la ronda de prueba de la web. 1812 usa el ejemplo del reglamento (código 2 4 3 1).
- Diego pidió "/minimalistic-graphics", pero esa habilidad no existe en Claude: se hicieron con `tools/video/` como los otros videos.
- En esta Mac no hay ffmpeg ni Playwright: se grabaron con `tools/video/render.swift` (WebKit + AVFoundation). Ver el README.

## Pendientes

1. **Revisar las pistas y los nombres de cartas** de las rondas de prueba (ver arriba).
2. **Reglamento de Eiffel en francés**: armar el PDF con las 8 páginas. Hoy `docs/assets/pdf/tour-eiffel-regles-fr.pdf` tiene solo la tapa. No traducir. En el Drive están las páginas impresas: "reglamento "Les secrets" en frances impreso1…7.png" y los PDF "LOW QUALITY REGLES EN FRANCAIS SECRETS".
3. La tapa de ese reglamento dice "3 à 5 en coopération / 2 à 10 en compétition", al revés de lo que decidió Diego.
4. 1812: en la web, los niveles 2 y 3 quedaron iguales (6 columnas, bandera, 4 turnos). Confirmar con Diego.
5. Página de privacidad y mentions légales (obligatorias en Francia). Hoy `/politicas-de-privacidad` redirige a Contacto.
6. Compra de prueba real en Stripe (con reembolso).
7. Cierre del cambio de dominio: renovación del dominio en Dattatec, correo y baja del plan de Wix.
8. Higgsfield, si Diego lo aprueba.
9. Diego quería armar una carpeta de materiales en la computadora de "Cykeros".

## Para trabajar desde el Mac

- Hace falta: git con sesión de GitHub iniciada, Node 18 o más nuevo y Python 3 con Pillow (`pip3 install pillow`).
- Clonar el repo al lado de la carpeta `ds4`: `git clone https://github.com/simonet46/ds4games.git`
- Las imágenes originales de la carpeta `ds4` no se suben al repo: solo sus versiones WebP.
