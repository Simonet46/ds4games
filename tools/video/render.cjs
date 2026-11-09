// Renderiza un video cuadro por cuadro con Chromium y lo codifica con ffmpeg.
//
//   node tools/video/render.cjs olympikos es            -> videos/olympikos-es.mp4
//   node tools/video/render.cjs olympikos es --still 3.5,9,14   (cuadros de prueba en PNG)
//
// Requiere Playwright (con Chromium) y ffmpeg.
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
const { chromium } = require("playwright");

const [, , name, lang = "es", ...rest] = process.argv;
if (!name) { console.error("Uso: node tools/video/render.cjs <olympikos|tour-eiffel|1812> <es|fr|en> [--still t1,t2] [--out dir]"); process.exit(1); }
const arg = (k) => { const i = rest.indexOf(k); return i >= 0 ? rest[i + 1] : null; };
const stills = arg("--still");
const outDir = path.resolve(arg("--out") || path.join(__dirname, "../../videos"));
const FPS = Number(arg("--fps") || 30);
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on("pageerror", (e) => console.error("Error en la página:", e.message));
  const file = path.join(__dirname, `${name}.html`);
  await page.goto(`file://${file}?lang=${lang}`);
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(Array.from(document.images).map((i) => i.decode().catch(() => {})));
    if (window.setup) await window.setup();
  });
  const D = await page.evaluate(() => window.DURATION);

  if (stills) {
    for (const t of stills.split(",").map(Number)) {
      await page.evaluate((t) => window.render(t), t);
      const out = path.join(outDir, `${name}-${lang}-${String(t).replace(".", "_")}.png`);
      await page.screenshot({ path: out });
      console.log(out);
    }
    await browser.close();
    return;
  }

  const out = path.join(outDir, `${name}-${lang}.mp4`);
  const ff = spawn("ffmpeg", [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-pix_fmt", "yuv420p",
    "-profile:v", "high", "-movflags", "+faststart", "-r", String(FPS), out,
  ], { stdio: ["pipe", "inherit", "inherit"] });

  const n = Math.round(D * FPS);
  const t0 = Date.now();
  for (let f = 0; f < n; f++) {
    await page.evaluate((t) => window.render(t), f / FPS);
    const buf = await page.screenshot({ type: "jpeg", quality: 94 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (f % 90 === 0) process.stdout.write(`\r${name}-${lang}: ${f}/${n}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on("close", r));
  await browser.close();
  console.log(`\r${out}  (${n} cuadros, ${((Date.now() - t0) / 1000).toFixed(0)} s)`);
})();
