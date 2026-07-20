import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://preview.example/", {
      headers: { accept: "text/html", host: "preview.example" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the wet-blast sales page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ja">/i);
  assert.match(html, /<title>大型ウェットブラストマシン/);
  assert.match(html, /ホイールや/);
  assert.match(html, /898,000/);
  assert.match(html, /推奨 5\.5kW/);
  assert.match(html, /電動ワイパー/);
  assert.match(html, /実機デモを予約する/);
  assert.match(html, /連絡先の入力へ/);
  assert.match(html, /property="og:image" content="https:\/\/preview\.example\/og\.png"/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("ships optimized product assets without starter preview code", async () => {
  const [page, layout, packageJson, assets] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(new URL("../public/assets/", import.meta.url)),
  ]);

  assert.match(page, /LARGE WET BLAST SYSTEM/);
  assert.match(page, /<LeadForm \/>/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /robots:\s*\{ index: false, follow: false \}/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.deepEqual(
    assets.sort(),
    [
      "wetblast-hero.webp",
      "wetblast-open.webp",
      "wetblast-side.webp",
      "wetblast-wheel.webp",
      "wetblast-wiper.webp",
    ],
  );
  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
