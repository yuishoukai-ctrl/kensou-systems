/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- Local assets and native route links are used for vinext compatibility. */
import EquipmentLeadForm from "./EquipmentLeadForm";

const equipmentFaqs = [
  {
    q: "4種類すべて導入する必要がありますか？",
    a: "いいえ。大型ウェットブラスト、サンドブラスト、粉体塗装機、粉体塗装用乾燥炉は単体でもご相談いただけます。現在の設備を確認し、必要な部分だけ整理します。",
  },
  {
    q: "工程全体の相談もできますか？",
    a: "はい。下地処理から粉体塗装、焼付までの流れに沿って、ワーク寸法、処理量、設置スペース、電源・エア・換気条件を確認します。材質や要求品質により、洗浄・乾燥・マスキング等の工程も別途検討します。",
  },
  {
    q: "粉体塗装機と乾燥炉の価格はいくらですか？",
    a: "現在、仕様と販売条件を策定中です。ワーク、処理量、必要仕様、設置条件を確認し、確定後に正式見積をご案内します。",
  },
  {
    q: "サンドブラストマシンはいつから販売しますか？",
    a: "現在は開発予定・仕様策定中です。ワーク寸法、用途、使用する研削材、必要な処理力、集塵条件などを伺い、製品仕様の検討に反映します。価格と販売時期は確定後にご案内します。",
  },
  {
    q: "ウェットブラストは100Vだけで使えますか？",
    a: "本体電源はAC100Vですが、噴射には圧縮空気が必要です。推奨コンプレッサーは5.5kWです。100V機や200V・2.2kW機では噴射力・処理速度が低下します。",
  },
  {
    q: "手持ちのワークが入るか確認できますか？",
    a: "寸法・重量・写真をもとに確認します。ウェットブラストは実機デモ、その他の設備は必要な有効寸法や扉開口、積載条件を整理してご案内します。",
  },
  {
    q: "搬入・設置まで依頼できますか？",
    a: "納品先、搬入口、荷下ろし設備、設置場所を確認し、対応範囲と費用を正式見積に記載します。電気、換気、集塵、排気等の工事範囲も事前に確認します。",
  },
];

export default function EquipmentCatalogPage() {
  return (
    <>
      <header className="catalog-header">
        <a className="catalog-brand" href="#top" aria-label="研装システムズ トップへ">
          <img className="brand-logo" src="/assets/logo-kensou-systems-dark.png" alt="" width="1400" height="356" />
        </a>
        <nav className="catalog-nav" aria-label="機材販売ページ ナビゲーション">
          <a href="#lineup">製品一覧</a>
          <a href="#process">工程提案</a>
          <a href="#support">導入の流れ</a>
          <a href="#divisions">事業部案内</a>
          <a href="#equipment-faq">よくある質問</a>
        </nav>
        <a className="catalog-header-cta" href="#consult">設備導入を相談</a>
      </header>

      <main id="top" className="catalog-page">
        <section className="catalog-hero" aria-labelledby="catalog-title">
          <div className="catalog-hero-copy">
            <p className="eyebrow">METAL FINISHING EQUIPMENT</p>
            <h1 id="catalog-title">ブラスト処理から<br />粉体塗装、焼付まで。</h1>
            <p className="catalog-hero-tagline">現場に合う一連の設備を、ひとつの窓口で。</p>
            <p className="catalog-hero-lead">
              大型ウェットブラストマシン、サンドブラストマシン、粉体塗装機、粉体塗装用乾燥炉。
              ワークの大きさ、仕上がり、処理量、設置環境を確認し、単体導入から工程づくりまでご相談いただけます。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#consult">設備一式を相談する</a>
              <a className="button button-ghost" href="/wetblast">ウェットブラストを見る</a>
            </div>
            <p className="catalog-hero-note">ご相談後、必要な仕様と設置条件を整理して正式見積をご案内します。</p>
          </div>

          <figure className="catalog-hero-visual">
            <img src="/equipment-lineup.png" alt="研装システムズが提案する表面処理・粉体塗装設備の構成イメージ" width="1720" height="909" fetchPriority="high" />
            <figcaption>製品構成イメージ / 実際の仕様・外観とは異なります</figcaption>
            <div className="catalog-hero-index" aria-hidden="true">
              <span>01 WET BLAST</span><span>02 POWDER COATING</span><span>03 CURING OVEN</span><span>04 SAND BLAST</span>
            </div>
          </figure>
        </section>

        <section className="catalog-status-strip" aria-label="取扱状況">
          <div><span>01 / 販売中</span><strong>大型ウェットブラスト</strong></div>
          <div><span>02 / 開発予定</span><strong>サンドブラスト</strong></div>
          <div><span>03 / 取扱準備中</span><strong>粉体塗装機</strong></div>
          <div><span>04 / 取扱準備中</span><strong>粉体塗装用乾燥炉</strong></div>
        </section>

        <section className="catalog-section catalog-process" id="process">
          <div className="catalog-heading catalog-heading-split">
            <div><p className="eyebrow eyebrow-dark">PROCESS DESIGN</p><h2>設備単体ではなく、<br />工程全体で考える。</h2></div>
            <p>設備同士の大きさ、処理能力、動線、電源・エア・換気条件の食い違いを減らし、現場に必要な構成を整理します。</p>
          </div>

          <ol className="process-map">
            <li><span className="process-no">01</span><small>SURFACE PREP</small><h3>下地処理</h3><p>用途に合わせてウェットブラストまたはサンドブラストを検討します。</p></li>
            <li><span className="process-no">02</span><small>POWDER COATING</small><h3>粉体塗装</h3><p>ワーク、粉体、色替え、処理量に合わせて塗装設備を検討します。</p></li>
            <li><span className="process-no">03</span><small>CURING</small><h3>焼付</h3><p>ワーク寸法と粉体メーカー指定条件に合わせて、乾燥炉を検討します。</p></li>
          </ol>
          <p className="process-note">※材質、粉体塗料、要求品質により、洗浄・乾燥・防錆・マスキング・冷却等の工程が別途必要です。</p>
          <a className="text-link" href="/?equipment=line#consult">工程全体を相談する <span>→</span></a>
        </section>

        <section className="catalog-section catalog-lineup" id="lineup">
          <div className="catalog-heading">
            <p className="eyebrow">EQUIPMENT LINEUP</p>
            <h2>取扱機材</h2>
            <p>確定仕様と、案件ごとに検討する項目を分けてご案内します。</p>
          </div>

          <article className="catalog-product product-wetblast" id="wetblast-product">
            <figure className="catalog-product-image">
              <img src="/assets/wetblast-wheel.webp" alt="作業室にホイールを収めた大型ウェットブラストの実機写真" width="900" height="1200" loading="lazy" />
              <figcaption>実機写真 / ホイール収容例</figcaption>
            </figure>
            <div className="catalog-product-copy">
              <div className="product-status is-selling"><span>01</span> 販売中・実機デモ受付</div>
              <p className="product-type">LARGE WET BLAST MACHINE</p>
              <h3>ホイールや大型エンジンに対応する、<br />大型ウェットブラスト。</h3>
              <p>大型ワークを収められるキャビネット、本体電源AC100V、作業中の視界確保を助ける電動ワイパーを搭載。実機デモと設置条件の確認後、正式見積をご案内します。</p>
              <dl className="catalog-spec-list">
                <div><dt>外形寸法</dt><dd>W1000 × D800 × H1900mm</dd></div>
                <div><dt>本体電源</dt><dd>AC100V</dd></div>
                <div><dt>推奨コンプレッサー</dt><dd>5.5kW</dd></div>
                <div><dt>視認装備</dt><dd>電動ワイパー</dd></div>
              </dl>
              <div className="catalog-price"><span>販売価格</span><strong>898,000<small>円</small></strong><em>税区分・送料等は正式見積</em></div>
              <p className="product-caution">100Vコンプレッサーや200V・2.2kW機では、推奨条件に比べ噴射力・処理速度が低下します。</p>
              <div className="product-actions">
                <a className="button button-primary" href="/wetblast">製品詳細・実機デモ</a>
                <a className="button button-ghost-light" href="/?equipment=wetblast#consult">この設備を相談</a>
              </div>
            </div>
          </article>

          <article className="catalog-product product-sandblast">
            <figure className="catalog-product-image catalog-generated-image sandblast-crop">
              <img src="/assets/sandblast-concept.webp" alt="開発予定のサンドブラストマシンのAI生成コンセプト画像" width="1536" height="1024" loading="lazy" />
              <figcaption>AI生成コンセプト画像 / 実際の仕様・外観とは異なります</figcaption>
            </figure>
            <div className="catalog-product-copy">
              <div className="product-status is-planning"><span>02</span> 開発予定・仕様策定中</div>
              <p className="product-type">SAND BLAST MACHINE</p>
              <h3>乾式ブラストの用途に合わせて考える、<br />サンドブラストマシン。</h3>
              <p>錆・塗膜の除去、素地調整などの用途を想定し、対象ワーク、使用する研削材、必要な処理力、作業環境に合わせた仕様を検討しています。</p>
              <div className="planning-block">
                <span>仕様策定で確認</span>
                <ul><li>ワークの材質・寸法・重量</li><li>錆取り・塗膜剥離などの用途</li><li>使用する研削材と希望する仕上がり</li><li>コンプレッサー容量・使用圧力</li><li>集塵・換気・設置スペース</li></ul>
              </div>
              <p className="planning-note">現在は開発予定の参考掲載です。仕様・価格・販売時期は未定で、掲載画像は完成品を示すものではありません。</p>
              <a className="button button-primary" href="/?equipment=sandblast#consult">開発予定機について相談する</a>
            </div>
          </article>

          <article className="catalog-product product-powder">
            <figure className="catalog-product-image catalog-generated-image powder-crop">
              <img src="/equipment-lineup.png" alt="粉体塗装機を含む設備構成イメージ" width="1720" height="909" loading="lazy" />
              <figcaption>製品構成イメージ / 実機写真ではありません</figcaption>
            </figure>
            <div className="catalog-product-copy">
              <div className="product-status is-planning"><span>03</span> 取扱準備中・導入相談受付</div>
              <p className="product-type">POWDER COATING SYSTEM</p>
              <h3>塗るものと仕上がりから考える、<br />粉体塗装機。</h3>
              <p>対象ワークの材質・寸法、使用する粉体、色替え頻度、処理量、作業スペースを伺い、必要な設備構成を整理します。</p>
              <div className="planning-block">
                <span>案件ごとに確認</span>
                <ul><li>ワークの材質・寸法・重量</li><li>色・質感・膜厚などの仕上がり</li><li>一日あたりの処理量・色替え頻度</li><li>電源・圧縮空気・接地条件</li><li>ブース・換気・集塵環境</li></ul>
              </div>
              <p className="planning-note">仕様・価格・発売時期は策定中です。現時点では工程・導入相談のみ受け付けています。</p>
              <a className="button button-primary" href="/?equipment=powder#consult">粉体塗装の条件を相談する</a>
            </div>
          </article>

          <article className="catalog-product product-oven">
            <figure className="catalog-product-image catalog-generated-image oven-crop">
              <img src="/equipment-lineup.png" alt="粉体塗装用乾燥炉を含む設備構成イメージ" width="1720" height="909" loading="lazy" />
              <figcaption>製品構成イメージ / 実機写真ではありません</figcaption>
            </figure>
            <div className="catalog-product-copy">
              <div className="product-status is-planning"><span>04</span> 取扱準備中・導入相談受付</div>
              <p className="product-type">POWDER CURING OVEN</p>
              <h3>ワーク寸法と焼付条件から考える、<br />粉体塗装用乾燥炉。</h3>
              <p>炉内に入れる最大ワーク、必要温度・保持時間、一回の処理量、設置スペース、搬入経路、利用可能な熱源を確認し、受注仕様を検討します。</p>
              <div className="planning-block">
                <span>案件ごとに確認</span>
                <ul><li>最大ワーク寸法・重量・数量</li><li>粉体メーカー指定の焼付条件</li><li>炉内有効寸法・扉開口</li><li>電源・熱源・換気・排気条件</li><li>設置場所・搬入経路・安全設備</li></ul>
              </div>
              <p className="planning-note">溶剤塗料や可燃性物質の加熱用途を示すものではありません。仕様・価格・発売時期は策定中です。</p>
              <a className="button button-primary" href="/?equipment=oven#consult">乾燥炉の仕様を相談する</a>
            </div>
          </article>
        </section>

        <section className="catalog-section catalog-support" id="support">
          <div className="catalog-support-layout">
            <div className="catalog-support-copy">
              <p className="eyebrow">INTRODUCTION SUPPORT</p>
              <h2>必要な設備が決まっていなくても、<br />ご相談いただけます。</h2>
              <p>現在の工程、処理したいワーク、目標とする仕上がりから、必要な設備と確認事項を整理します。</p>
            </div>
            <ol className="catalog-support-list">
              <li><span>01</span><div><h3>用途を確認</h3><p>ワーク、材質、寸法、重量、処理量、希望仕上がりを伺います。</p></div></li>
              <li><span>02</span><div><h3>設置条件を整理</h3><p>スペース、搬入口、電源、エア、給排水、換気・集塵条件を確認します。</p></div></li>
              <li><span>03</span><div><h3>仕様・範囲を決定</h3><p>本体、周辺設備、搬入・設置、工事、試運転等の範囲を明確にします。</p></div></li>
              <li><span>04</span><div><h3>正式見積</h3><p>価格、納期、保証、支払条件、変更・キャンセル条件を書面で提示します。</p></div></li>
            </ol>
          </div>
        </section>

        <section className="catalog-section catalog-divisions" id="divisions" aria-labelledby="divisions-title">
          <div className="catalog-division-intro">
            <p className="eyebrow eyebrow-dark">BUSINESS DIVISIONS</p>
            <h2 id="divisions-title">ものづくりと発信を、<br />二つの事業で支える。</h2>
            <p>研装システムズは、表面処理設備を扱う産業機械事業部と、地域の店舗・中小事業者を支援するWeb制作事業部を分けて運営しています。</p>
          </div>
          <div className="catalog-division-grid">
            <article className="catalog-division-card is-current">
              <span>INDUSTRIAL EQUIPMENT DIVISION</span>
              <small>現在のサイト</small>
              <h3>産業機械事業部</h3>
              <strong>ブラスト・粉体塗装設備</strong>
              <p>ウェットブラスト、サンドブラスト、粉体塗装機、粉体塗装用乾燥炉の企画・販売。</p>
            </article>
            <a className="catalog-division-card catalog-division-link" href="https://yasashii-web-studio-jp.yuishoukai.chatgpt.site" target="_blank" rel="noreferrer" aria-label="Web制作事業部・やさしいWeb制作を関係者向け限定サイトで見る">
              <span>WEB CREATION DIVISION</span>
              <small>関係者向け限定公開</small>
              <h3>Web制作事業部</h3>
              <strong>やさしいWeb制作</strong>
              <p>静岡市清水区を中心に、初心者にも分かりやすいホームページ制作を提供します。</p>
              <b>事業部サイトを見る <i aria-hidden="true">→</i></b>
            </a>
          </div>
        </section>

        <section className="catalog-section catalog-faq" id="equipment-faq">
          <div className="faq-layout">
            <div className="faq-heading"><p className="eyebrow eyebrow-dark">FAQ</p><h2>機材導入の<br />よくある質問</h2><p>不明な点は総合相談で一緒に整理できます。</p></div>
            <div className="faq-list">
              {equipmentFaqs.map((item, index) => (
                <details key={item.q} open={index === 0}><summary><span>Q</span>{item.q}<b aria-hidden="true">＋</b></summary><div className="faq-answer"><span>A</span><p>{item.a}</p></div></details>
              ))}
            </div>
          </div>
        </section>

        <section className="catalog-section catalog-consult" id="consult">
          <div className="catalog-consult-intro">
            <p className="eyebrow">EQUIPMENT CONSULTATION</p>
            <h2>設備と工程を、<br />まとめて相談。</h2>
            <p>分からない項目は「不明」で構いません。対象ワークと現在の困りごとから確認を始めます。</p>
            <div className="consult-safety">
              <strong>ご相談前に</strong>
              <p>ブラスト・粉体塗装設備・乾燥炉は、電源・圧縮空気・接地・換気・集塵・排気・防火等の条件確認が必要です。</p>
            </div>
          </div>
          <EquipmentLeadForm />
        </section>
      </main>

      <footer className="catalog-footer">
        <div className="footer-brand"><img className="brand-logo" src="/assets/logo-kensou-systems-dark.png" alt="研装システムズ｜KENSO SYSTEMS" width="1400" height="356" loading="lazy" /></div>
        <div className="footer-status"><span>INDUSTRIAL EQUIPMENT DIVISION</span><strong>産業機械事業部</strong></div>
        <div className="catalog-footer-notes">
          <p>※大型ウェットブラストの販売価格898,000円は、税区分・送料・搬入設置等を正式見積に明記します。</p>
          <p>※粉体塗装機・乾燥炉は仕様および販売条件を策定中です。サンドブラストは開発予定・仕様策定中です。</p>
          <p>※AI生成画像および製品構成画像は参考イメージであり、実際の製品仕様・外観とは異なります。</p>
          <p>※必要な電源、圧縮空気、換気・集塵、排気、接地、消防・労働安全上の条件は設置先ごとに確認します。</p>
          <p>※保証、支払、予約金、納期、変更・キャンセル条件は、入金前に書面で提示します。</p>
        </div>
        <p className="copyright">© KENSO SYSTEMS</p>
      </footer>

      <a className="mobile-sticky-cta" href="#consult">設備導入を相談する</a>
    </>
  );
}
