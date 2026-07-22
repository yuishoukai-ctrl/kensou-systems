/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- Local assets and native route links avoid vinext optimizer/router failures. */
import type { CSSProperties } from "react";
import LeadForm from "./LeadForm";

const specs = [
  ["方式", "手動キャビネット式ウェットブラストマシン"],
  ["外形寸法", "W1000 × D800 × H1900 mm"],
  ["本体電源", "AC100V"],
  ["推奨コンプレッサー", "5.5kW"],
  ["視認装備", "電動ワイパー"],
  ["対応ワーク", "ホイール・エンジン等 ※適合確認制"],
  ["販売価格", "898,000円 ※税区分等は正式見積"],
];

const orderSteps = [
  {
    number: "01",
    title: "デモ・テスト加工相談",
    text: "実機またはオンラインで、ワークの収まり・操作・視界を確認します。",
  },
  {
    number: "02",
    title: "用途・設置条件の確認",
    text: "ワーク、コンプレッサー、設置場所、搬入経路、納品先を整理します。",
  },
  {
    number: "03",
    title: "正式見積",
    text: "本体、付属品、送料、搬入・設置、納期、保証、支払条件を明記します。",
  },
  {
    number: "04",
    title: "予約金・製作枠確保",
    text: "注文条件をご確認後、予約金の入金をもって製作枠を確保します。",
  },
  {
    number: "05",
    title: "完成確認・納品",
    text: "完成状態を写真または動画で確認後、合意した配送条件に沿って納品します。",
  },
];

const faqs = [
  {
    q: "本体が100Vなら、100Vコンプレッサーだけで十分ですか？",
    a: "本体電源はAC100Vですが、噴射性能はコンプレッサー能力に左右されます。推奨は5.5kWです。100V機や200V・2.2kW機では噴射力・処理速度が低下するため、型式を確認して導入可否をご案内します。",
  },
  {
    q: "ウェットブラストとサンドブラストの違いは何ですか？",
    a: "ウェットブラストは水と研磨材を使う湿式の表面処理です。乾式のサンドブラストとは粉塵、仕上がり、研削力、後処理が異なるため、落としたい汚れや塗膜、母材、目標とする表面状態から方式を選びます。",
  },
  {
    q: "ホイールやエンジンは入りますか？",
    a: "ホイールを収めた実機写真をご確認いただけます。ワークごとに寸法・重量が異なるため、写真・寸法・重量、または現物で適合を確認します。",
  },
  {
    q: "デモでは何を確認できますか？",
    a: "ワークの収まり、操作方法、電動ワイパーの動作、コンプレッサー条件を確認できます。テスト加工をご希望の場合は、対象物と希望仕上がりを事前に伺います。",
  },
  {
    q: "送料や設置費は価格に含まれますか？",
    a: "納品先と搬入条件を確認し、本体、送料、搬入・設置、付属品を分けて正式見積に記載します。",
  },
  {
    q: "納期はどのくらいですか？",
    a: "受注枠と仕様確認後、正式見積で納期の目安を提示します。在庫を多く持たない受注生産方式です。",
  },
  {
    q: "保証や消耗品はどうなりますか？",
    a: "保証範囲・期間、消耗品、交換部品、サポート方法を正式見積に明記します。",
  },
];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</p>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="研装システムズの機材販売ページへ戻る">
          <img className="brand-logo" src="/assets/logo-kensou-systems-dark.png" alt="" width="1400" height="356" />
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="/">機材一覧</a>
          <a href="#features">特長</a>
          <a href="#spec">仕様</a>
          <a href="#flow">導入の流れ</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <a className="header-cta" href="#inquiry">実機デモを予約</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-copy-inner">
              <Eyebrow>受注枠制 / LARGE WET BLAST SYSTEM</Eyebrow>
              <h1 id="hero-title">
                ホイール・エンジン対応
                <br />
                <span>大型ウェットブラストマシン。</span>
              </h1>
              <p className="hero-lead">
                これまで高額だった大型ウェットブラストマシンを、導入しやすい価格で。
                大きなワークをキャビネット内で処理できる、受注生産の実機です。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#inquiry">実機デモを予約する</a>
                <a className="button button-ghost" href="#spec">仕様を確認する</a>
              </div>
              <p className="hero-note">正式注文の前に、ワーク・搬入経路・コンプレッサー条件を確認します。</p>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/assets/wetblast-hero.webp"
              alt="大型ウェットブラストマシンの実機全景"
              width="1200"
              height="1500"
              fetchPriority="high"
            />
            <div className="availability-tag">
              <span>BUILD TO ORDER</span>
              <strong>製作枠を順次受付</strong>
            </div>
            <aside className="price-lockup" aria-label="販売価格">
              <span>販売価格</span>
              <strong><b>898,000</b>円</strong>
              <small>税区分・送料・設置費等は正式見積</small>
            </aside>
          </div>
        </section>

        <section className="quick-spec" aria-label="主要仕様">
          <div><span>BODY POWER</span><strong>AC100V</strong></div>
          <div><span>COMPRESSOR</span><strong>推奨 5.5kW</strong></div>
          <div><span>EXTERNAL SIZE</span><strong>W1000 × D800 × H1900</strong></div>
          <div><span>VISIBILITY</span><strong>電動ワイパー</strong></div>
        </section>

        <section className="section section-light intro-section" id="features">
          <div className="section-heading split-heading">
            <div>
              <Eyebrow dark>WHY LARGE CABINET</Eyebrow>
              <h2>大型ウェットブラストマシンとは</h2>
            </div>
            <p>
              水・研磨材・圧縮空気を使い、洗浄と表面処理を行うキャビネット式設備です。
              レストア、エンジン整備、ホイール補修、機械修理など、大型ワークを扱う現場の「入らない」を解消するサイズと作業中の視認性を両立しました。
            </p>
          </div>

          <div className="feature-zigzag">
            <article className="feature-row">
              <figure className="feature-image portrait-image">
                <img src="/assets/wetblast-wheel.webp" alt="作業室にホイールを収めた実機写真" width="900" height="1200" loading="lazy" />
                <figcaption>実機写真 / ホイール収容例</figcaption>
              </figure>
              <div className="feature-copy">
                <span className="feature-number">01 / CAPACITY</span>
                <h3>ホイールが収まる、<br />大型キャビネット。</h3>
                <p>
                  大型エンジンやホイールなど、これまで小型機では扱いづらかったワークに対応。
                  適合は対象物の寸法・重量を事前に確認します。
                </p>
                <a className="text-link" href="#inquiry">処理したい部品を見せて相談する <span>→</span></a>
              </div>
            </article>

            <article className="feature-row feature-row-reverse">
              <figure className="feature-image landscape-image">
                <img src="/assets/wetblast-wiper.webp" alt="電動ワイパーを備えた大型のぞき窓" width="1000" height="1250" loading="lazy" />
                <figcaption>実機写真 / 電動ワイパー搭載</figcaption>
              </figure>
              <div className="feature-copy">
                <span className="feature-number">02 / VISIBILITY</span>
                <h3>ワイパーで拭き取り、<br />視界を確保。</h3>
                <p>
                  のぞき窓に電動ワイパーを搭載。水滴やミストを拭き取りながら、ワークの状態を確認して作業できます。
                </p>
                <a className="text-link" href="#inquiry">デモで動作を確認する <span>→</span></a>
              </div>
            </article>
          </div>
        </section>

        <section className="section proof-section" aria-labelledby="proof-title">
          <div className="section-heading proof-heading">
            <div>
              <Eyebrow>REAL MACHINE / REAL SCALE</Eyebrow>
              <h2 id="proof-title">見て、入れて、動かして。<br />導入前に確かめられます。</h2>
            </div>
            <p>生成イメージではなく、実際の製品写真でサイズと構造をご確認ください。</p>
          </div>
          <div className="proof-grid">
            <figure className="proof-main">
              <img src="/assets/wetblast-open.webp" alt="扉を開けた大型ウェットブラストマシンの作業室" width="1000" height="1250" loading="lazy" />
              <figcaption><span>01</span> 扉開放時の作業室</figcaption>
            </figure>
            <figure className="proof-side">
              <img src="/assets/wetblast-side.webp" alt="大型ウェットブラストマシンの側面と配管" width="1000" height="1300" loading="lazy" />
              <figcaption><span>02</span> 側面構造・配管</figcaption>
            </figure>
            <div className="proof-cta">
              <p>お持ちのワークが入るか、<br />写真と寸法から確認します。</p>
              <a className="button button-primary" href="#inquiry">デモ・適合確認を相談</a>
            </div>
          </div>
        </section>

        <section className="section section-light spec-section" id="spec">
          <div className="spec-layout">
            <div className="spec-main">
              <Eyebrow dark>SPECIFICATION</Eyebrow>
              <h2>主な仕様</h2>
              <dl className="spec-table">
                {specs.map(([term, description]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
              <div className="compressor-alert">
                <span className="alert-label">重要 / COMPRESSOR</span>
                <h3>本体は100V。噴射には、別途圧縮空気が必要です。</h3>
                <p>
                  推奨コンプレッサーは5.5kWです。100Vコンプレッサーや200V・2.2kW機では、
                  推奨条件に比べて噴射力・処理速度が低下します。お持ちの型式を事前に確認します。
                </p>
              </div>
              <p className="spec-pending">
                正式見積時に確認・明記：作業室内寸、最大ワーク寸法・重量、機械重量、必要圧力・吐出量、
                ノズル径、給排水条件、付属品、保証、送料・搬入設置条件。
              </p>
            </div>

            <aside className="fit-check">
              <span className="fit-check-label">PRE-INSTALLATION CHECK</span>
              <h3>その設備で使えるか、先に確認します。</h3>
              <ul>
                <li><span>01</span> 設置スペース</li>
                <li><span>02</span> 搬入口・段差</li>
                <li><span>03</span> コンプレッサー型式</li>
                <li><span>04</span> ワークの寸法・重量</li>
                <li><span>05</span> 納品先・荷下ろし環境</li>
              </ul>
              <p>寸法や型式が分からない場合も、写真を見ながら整理できます。</p>
              <a className="button button-ghost-light" href="#inquiry">設置できるか相談する</a>
            </aside>
          </div>
        </section>

        <section className="section flow-section" id="flow">
          <div className="flow-layout">
            <div className="flow-intro">
              <Eyebrow>BUILD TO ORDER</Eyebrow>
              <h2>在庫を積まず、<br />条件を合わせて製作。</h2>
              <p>
                大型機だからこそ、完成品在庫を多く持たず受注枠制に。
                導入前の確認を丁寧に行い、過剰な在庫コストを抑えた価格につなげます。
              </p>
              <p className="flow-note">予約金額、納期、変更・キャンセル条件は、入金前に書面で明示します。</p>
            </div>
            <ol className="flow-list">
              {orderSteps.map((step, index) => (
                <li key={step.number} style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
                  <span className="flow-number">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-light faq-section" id="faq">
          <div className="faq-layout">
            <div className="faq-heading">
              <Eyebrow dark>FAQ</Eyebrow>
              <h2>導入前の<br />よくある質問</h2>
              <p>不明な点はデモ相談で一緒に確認できます。</p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary><span>Q</span>{item.q}<b aria-hidden="true">＋</b></summary>
                  <div className="faq-answer"><span>A</span><p>{item.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section inquiry-section" id="inquiry">
          <div className="inquiry-intro">
            <Eyebrow>DEMO / FIT CHECK</Eyebrow>
            <h2>まずは実機で、<br />確かめてください。</h2>
            <p>
              来訪デモ、オンライン実演、テスト加工のご相談に対応。
              分からない項目は「不明」で構いません。
            </p>
            <div className="inquiry-points">
              <div><span>01</span><p>入力だけでは注文・予約金の支払いは確定しません。</p></div>
              <div><span>02</span><p>用途と設備条件を確認後、正式見積をご案内します。</p></div>
            </div>
          </div>
          <LeadForm />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img className="brand-logo" src="/assets/logo-kensou-systems-dark.png" alt="研装システムズ｜KENSO SYSTEMS" width="1400" height="356" loading="lazy" />
        </div>
        <div className="footer-status">
          <span>PRODUCT / CONTACT</span>
          <strong>大型ウェットブラストマシン</strong>
        </div>
        <div className="footer-notes">
          <p>※販売価格898,000円。税区分、送料、搬入・設置、研磨材、コンプレッサー、オプション等は正式見積に明記します。</p>
          <p>※噴射性能はコンプレッサー能力、ノズル、圧力、研磨材、対象物により異なります。</p>
          <p>※仕様・外観は改良のため変更する場合があります。正式な取引条件は見積書・注文条件を優先します。</p>
        </div>
        <p className="copyright">© KENSO SYSTEMS</p>
      </footer>

      <a className="mobile-sticky-cta" href="#inquiry">実機デモを予約する</a>
    </>
  );
}
