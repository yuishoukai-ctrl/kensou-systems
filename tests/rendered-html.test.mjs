import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://preview.example${pathname}`, {
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

test("server-renders the equipment catalog", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ja">/i);
  assert.match(html, /<title>研装システムズ｜ウェットブラスト/);
  assert.match(html, /下地処理から/);
  assert.match(html, /898,000/);
  assert.match(html, /粉体塗装機/);
  assert.match(html, /粉体塗装用乾燥炉/);
  assert.match(html, /href="\/drying-oven"/);
  assert.match(html, /炉内内寸 約1200 × 1200 × 1200mm/);
  assert.match(html, /横幅 約1700 × 奥行 約700 × 高さ 約2000mm/);
  assert.match(html, /1,200,000円/);
  assert.match(html, /1,800,000円/);
  assert.match(html, /最高温度 220℃／三相200V・6kW/);
  assert.match(html, /最高温度 220℃／三相200V・10～15kW/);
  assert.match(html, /1,200,000円（税別）/);
  assert.match(html, /高さ 約2000mm/);
  assert.match(html, /4ミニショップ/);
  assert.match(html, /自動車ホイール4本/);
  assert.match(html, /サンドブラスト/);
  assert.match(html, /AI生成コンセプト画像/);
  assert.match(html, /推奨コンプレッサー/);
  assert.match(html, /5\.5kW/);
  assert.match(html, /電動ワイパー/);
  assert.match(html, /設備一式を相談する/);
  assert.match(html, /連絡先の入力へ/);
  assert.match(html, /href="tel:05017850018"/);
  assert.match(html, /050-1785-0018/);
  assert.match(html, /property="og:image" content="https:\/\/preview\.example\/og-kensou-systems\.png"/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("server-renders the drying oven detail page", async () => {
  const response = await render("/drying-oven");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /粉体塗装用乾燥炉/);
  assert.match(html, /120サイズ/);
  assert.match(html, /180サイズ/);
  assert.match(html, /1,200,000円/);
  assert.match(html, /1,800,000円/);
  assert.match(html, /三相200V/);
  assert.match(html, /6kW/);
  assert.match(html, /10～15kW/);
  assert.match(html, /1,800,000円（税別）/);
  assert.match(html, /高さ 約2000mm/);
  assert.match(html, /バイクフレームを丸ごと焼付/);
  assert.match(html, /自動車ホイールを一度に4本焼付/);
  assert.match(html, /powder-curing-oven-generated\.webp/);
  assert.match(html, /ご購入前に対象ワークの寸法を確認します/);
});

test("keeps the wet-blast product detail page", async () => {
  const response = await render("/wetblast");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /ホイールや/);
  assert.match(html, /大型エンジンに/);
  assert.match(html, /実機デモを予約する/);
  assert.match(html, /898,000/);
});

test("ships optimized product assets without starter preview code", async () => {
  const [page, layout, packageJson, assets] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(new URL("../public/assets/", import.meta.url)),
  ]);

  assert.match(page, /KENSO SYSTEMS/);
  assert.match(page, /logo-kensou-systems-dark\.png/);
  assert.match(page, /sandblast-concept\.webp/);
  assert.match(page, /<EquipmentLeadForm \/>/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /robots:\s*\{ index: true, follow: true \}/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.deepEqual(
    assets.sort(),
    [
      "logo-kensou-systems-dark.png",
      "logo-kensou-systems.png",
      "powder-curing-oven-generated.webp",
      "sandblast-concept.webp",
      "wetblast-hero.webp",
      "wetblast-open.webp",
      "wetblast-side.webp",
      "wetblast-wheel.webp",
      "wetblast-wiper.webp",
    ],
  );
  await Promise.all([
    access(new URL("../public/og-kensou-systems.png", import.meta.url)),
    access(new URL("../public/favicon-kensou.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
    access(new URL("../public/equipment-lineup.png", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
