/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- Native links support the static deployment. */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "粉体塗装用乾燥炉｜研装システムズ",
  description: "研装システムズの粉体塗装用乾燥炉。120サイズと180サイズの予定仕様、導入時の確認項目をご案内します。",
};

export default function DryingOvenPage() {
  return (
    <div className="oven-detail-page">
      <header className="catalog-header">
        <a className="catalog-brand" href="/" aria-label="研装システムズ トップへ">
          <img className="brand-logo" src="/assets/logo-kensou-systems-dark.png" alt="" width="1400" height="356" />
        </a>
        <nav className="catalog-nav" aria-label="乾燥炉ページ ナビゲーション">
          <a href="/#lineup">製品一覧</a><a href="#models">予定サイズ</a><a href="#consult-points">確認項目</a>
        </nav>
        <a className="catalog-header-cta" href="/?equipment=oven#consult">乾燥炉を相談</a>
      </header>

      <main className="oven-detail-main">
        <section className="oven-detail-hero" aria-labelledby="oven-title">
          <div className="oven-detail-copy">
            <p className="eyebrow">粉体塗装・焼付設備</p>
            <div className="product-status is-planning"><span>04</span> 仕様相談受付中</div>
            <h1 id="oven-title">粉体塗装用<br />乾燥炉</h1>
            <p className="oven-detail-lead">ワークサイズに合わせて選べる2サイズ。粉体塗装後の焼付工程を、処理量や設置条件に合わせて検討します。</p>
            <div className="oven-detail-actions"><a className="button button-primary" href="#models">サイズを見る</a><a className="button button-ghost-light" href="/?equipment=oven#consult">仕様を相談する</a></div>
          </div>
          <figure className="oven-detail-visual">
            <img src="/assets/powder-curing-oven-generated.webp" width="1536" height="1024" alt="粉体塗装用乾燥炉のAI生成参考イメージ" />
            <figcaption>AI生成による参考イメージ / 実機写真へ差し替え予定</figcaption>
          </figure>
        </section>

        <section className="oven-detail-section" id="models" aria-labelledby="models-title">
          <div className="oven-detail-heading"><div><p className="eyebrow">予定サイズ</p><h2 id="models-title">選べる<br />2サイズ。</h2></div><p>現時点で予定している寸法です。実際に炉内へ入れるワークの外形・重量・数量を確認し、扉開口や炉内有効寸法を含めて正式仕様をご案内します。</p></div>
          <div className="oven-models">
            <article className="oven-model"><span className="oven-model-label">120サイズ</span><h3>炉内内寸<br />約1200 × 1200 × 1200mm</h3><strong className="oven-model-price">販売価格 1,200,000円</strong><p>120cm四方の炉内を予定しています。ワーク寸法と治具を含め、必要な余裕を確認します。</p></article>
            <article className="oven-model"><span className="oven-model-label">180サイズ</span><h3>横幅 約1700mm<br />奥行 約700mm</h3><strong className="oven-model-price">販売価格 1,800,000円</strong><p>高さと炉内有効寸法は確認中です。対象ワークと設置場所を伺い、確定仕様をご案内します。</p></article>
          </div>
          <p className="oven-spec-note">掲載寸法は現時点の予定仕様です。扉開口、電源・熱源、最高温度、保持時間、設置・排気条件を確認します。税区分・送料・搬入設置費等は正式見積に明記します。</p>
        </section>

        <section className="oven-consult" id="consult-points" aria-labelledby="consult-points-title">
          <div><p className="eyebrow">ご相談時の確認項目</p><h2 id="consult-points-title">焼付条件と<br />設置環境を確認。</h2><p>粉体メーカー指定の焼付条件と現場設備を確認し、乾燥炉本体と周辺条件を整理します。</p><div className="oven-detail-actions"><a className="button button-primary" href="/?equipment=oven#consult">乾燥炉の仕様を相談する</a><a className="button button-ghost-light" href="/#lineup">製品一覧へ戻る</a></div></div>
          <ul className="oven-checklist"><li>最大ワーク寸法・重量・数量</li><li>粉体メーカー指定の焼付条件</li><li>一回あたりの処理量</li><li>扉開口・炉内有効寸法</li><li>電源・熱源・換気・排気</li><li>設置場所・搬入経路・安全設備</li></ul>
        </section>
      </main>
    </div>
  );
}
