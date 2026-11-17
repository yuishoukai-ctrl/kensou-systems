/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages -- Native links match the static deployment. */
import type { Metadata } from "next";
import "../../docs/startup.css";

const title = "パウダーコート（粉体塗装）の開業支援｜設備・初期費用・実技講習｜研装システムズ";
const description = "パウダーコート（粉体塗装）の開業・内製化を支援。ホイールや金属小物の塗装品質を管理する方法、外注費と内製費の比べ方、必要な設備・初期費用、2日間の実技講習をご案内します。";
const canonical = "https://kensosystems.jp/powder-coating-startup/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    locale: "ja_JP",
    siteName: "研装システムズ｜KENSO SYSTEMS",
    images: ["/assets/startup-hero-workbench.webp"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/startup-hero-workbench.webp"] },
};

export default function PowderCoatingStartupPage() {
  return (
    <div className="startup-page">
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="catalog-header">
        <a className="catalog-brand" href="/" aria-label="研装システムズ トップへ">
          <img className="brand-logo" src="/assets/logo-kensou-systems-dark.png" alt="" width="1400" height="356" />
        </a>
        <nav className="catalog-nav" aria-label="開業支援ページ ナビゲーション">
          <a href="#in-house">内製化</a>
          <a href="#equipment">必要な設備</a>
          <a href="#cost">初期費用</a>
          <a href="#course">実技講習</a>
        </nav>
        <a className="catalog-header-cta" href="/?equipment=opening#consult">開業を相談</a>
      </header>

      <main id="main">
        <section className="startup-hero" aria-labelledby="startup-title">
          <div className="startup-shell startup-hero-layout">
            <div className="startup-intro">
              <h1 id="startup-title">パウダーコート<span>（粉体塗装）の開業支援</span></h1>
              <p className="startup-hero-promise">塗装品質を自店で。外注費を見直す。</p>
              <p>バイクの小物やホイールの塗装を、自店のサービスに。塗りたい部品と作業場に合わせて、前処理から焼付までの設備と初期費用を整理します。</p>
              <p>開業におすすめの<strong>講習セットは2日間・33万円（税別）</strong>。持ち込み部品で施工と検品を学び、価格設定や見積もり、顧客への案内まで扱います。</p>
              <div className="startup-actions">
                <a className="button button-primary" href="/?equipment=opening#consult">パウダーコートの開業について相談する</a>
                <a className="startup-text-link" href="#cost">初期費用の内訳を見る</a>
              </div>
            </div>
          </div>
          <figure className="startup-visual">
            <img src="/assets/startup-hero-workbench.webp" width="1536" height="1024" fetchPriority="high" alt="粉体塗装で仕上げた赤いバイクフレームと黒いホイールのイメージ" />
            <figcaption>仕上がりイメージ（AI生成）</figcaption>
          </figure>
        </section>

        <nav className="startup-guide" aria-label="塗装・費用・講習の案内">
          <div className="startup-shell">
            <a href="#why-powder">仕上がりを見る <span aria-hidden="true">↓</span></a>
            <a href="#monthly-cost">外注費を比べる <span aria-hidden="true">↓</span></a>
            <a href="#course">講習セットを見る <span aria-hidden="true">↓</span></a>
          </div>
        </nav>

        <section className="startup-section startup-shell" id="why-powder" aria-labelledby="startup-why-title">
          <div className="startup-feature startup-feature-image-first">
            <div>
              <h2 id="startup-why-title">なぜパウダーコートを選ぶのか</h2>
              <p className="startup-prose">パウダーコート（粉体塗装）は、粉末状の塗料を静電気で金属部品に付着させ、焼き付けて塗膜をつくる方法です。部品を使う環境と、お客様が求める仕上がりに合わせて塗料を選べます。</p>
            </div>
            <figure className="startup-feature-media">
              <img src="/assets/startup-finish-samples.webp" width="1200" height="800" loading="lazy" decoding="async" alt="艶ありと艶消しの塗装見本、赤とグレーの塗板、黒いホイール" />
              <figcaption>色・艶の比較イメージ（AI生成）</figcaption>
            </figure>
          </div>
          <div className="startup-topics">
            <article>
              <h3>屋外で使う部品に合う塗膜を選べる</h3>
              <p>ホイールやフレームには、耐候性や防食性を考えて塗料と下地処理を選びます。塗膜の性能を引き出すため、部品の材質や塗料に合う前処理と焼付条件を確認します。</p>
            </article>
            <article>
              <h3>色と艶を施工メニューにできる</h3>
              <p>たとえば、同じ黒でも艶ありと艶消しでは見え方が変わります。塗装見本を用意すると、部品を預かる前に色や艶のイメージをお客様と確認しやすくなります。</p>
            </article>
          </div>
          <p className="startup-note startup-sources">
            <a href="https://www.powder-coating.or.jp/powder/tokucho.html">粉体塗装の特長（日本パウダーコーティング協同組合）</a>
            <a href="https://www.shintopaint.co.jp/product/introduction/industrial/powder-notes/">粉体塗装の技術資料（神東塗料）</a>
          </p>
        </section>

        <section className="startup-section startup-band" id="in-house" aria-labelledby="startup-in-house-title">
          <div className="startup-shell">
            <div className="startup-feature">
              <div>
                <h2 id="startup-in-house-title">内製化で、塗装品質と外注費を管理する</h2>
                <p className="startup-prose">バイクホイールや金属小物を定期的に外注しているなら、依頼の多い部品から内製化を検討できます。同じ種類の部品を繰り返し扱うと、作業手順や検品の基準をそろえやすくなります。</p>
              </div>
              <figure className="startup-feature-media">
                <img src="/assets/startup-powder-booth.webp" width="1200" height="800" loading="lazy" decoding="async" alt="塗装ブースで吊り下げた金属部品に粉体を吹き付ける作業者" />
                <figcaption>粉体塗装ブースでの作業イメージ（AI生成）</figcaption>
              </figure>
            </div>
            <div className="startup-models">
              <article className="startup-model">
                <h3>仕上がりを自店の基準で確認できる</h3>
                <p>受付時に色・艶と塗装範囲を決め、ねじ穴や合わせ面などのマスキング箇所を確認。施工後は外観や膜厚を確かめ、使った塗料や焼付条件を記録しておくと、次回も同じ仕上がりを目指せます。</p>
              </article>
              <article className="startup-model">
                <h3>外注施工代と往復送料を見直せる</h3>
                <p>たとえば、毎月外注に出すホイールを自店で仕上げられれば、移行した分の外注施工代や往復送料を抑えられます。発送や返却待ちの工程が減り、自店で納期を組みやすくなります。</p>
              </article>
            </div>
            <p className="startup-prose">まずは直近の外注伝票を見て、どの部品を月に何点頼んでいるか、施工と送料にいくらかかっているかを整理してみてください。内製化する部品に合わせて、無理のない設備構成を一緒に検討します。</p>
            <a className="startup-text-link" href="/?equipment=internalization#consult">パウダーコートの内製化を相談する</a>
          </div>
        </section>

        <section className="startup-section startup-shell" id="equipment" aria-labelledby="startup-equipment-title">
          <h2 id="startup-equipment-title">パウダーコートの開業に必要な設備</h2>
          <p className="startup-prose">最初に受ける部品の種類と、1回に処理する点数を決めます。同じホイールでも、外径、幅、吊り治具を含めた寸法によって、ブースや乾燥炉に必要な広さが変わります。</p>
          <div className="startup-feature startup-feature-parts">
            <figure className="startup-feature-media startup-parts-media">
              <img src="/assets/powder-coating-examples-transparent.webp" width="1535" height="1024" loading="lazy" decoding="async" alt="赤いバイクフレーム、黒いバイクホイール、オレンジのスプリング" />
              <figcaption>実際の粉体塗装例をもとにAIで背景処理・構成</figcaption>
            </figure>
            <div className="startup-models">
              <article className="startup-model">
                <h3>バイク小物・バイクホイール</h3>
                <p className="startup-model-size">120サイズを検討</p>
                <p>部品と吊り治具を含めた寸法、一度に入れる点数を確認します。</p>
              </article>
              <article className="startup-model">
                <h3>バイクフレーム・自動車ホイール</h3>
                <p className="startup-model-size">180サイズも候補</p>
                <p>最も大きな部品の外形と重量、扉の開口、炉内の有効寸法、搬入経路を確認します。</p>
              </article>
            </div>
          </div>
          <p className="startup-prose">塗装工程には、下地を整える<strong>前処理設備</strong>、粉体を吹き付ける<strong>粉体塗装機と塗装ブース</strong>、塗膜を硬化させる<strong>焼付炉（粉体塗装用乾燥炉）</strong>が関わります。前処理の範囲は部品の材質や旧塗膜の状態に応じて考え、剥離や下地処理を外注する場合は、その費用も見積もりに入れます。</p>
          <a className="startup-text-link" href="/drying-oven">粉体塗装用乾燥炉のサイズと設置条件を見る</a>
        </section>

        <section className="startup-section startup-band" id="cost" aria-labelledby="startup-cost-title">
          <div className="startup-shell">
            <h2 id="startup-cost-title">開業時の初期費用の内訳</h2>
            <dl className="startup-cost-list">
              <div><dt>前処理</dt><dd>洗浄・剥離・ブラストの設備や外注費。手持ちの機材と追加購入分を確認します。</dd></div>
              <div><dt>粉体塗装</dt><dd>粉体塗装機、ブース、集塵設備、コンプレッサーなど。塗装機は仕様・価格を策定中で、導入相談を受け付けています。</dd></div>
              <div><dt>焼付</dt><dd>乾燥炉本体の掲載価格は、120サイズが120万円、180サイズが180万円（各税別、仕様相談受付中）です。</dd></div>
              <div><dt>搬入・設置・工事</dt><dd>送料、搬入設置、電源、接地、換気・排気など。掲載の乾燥炉はどちらも三相200Vです。</dd></div>
              <div><dt>開業時の材料・備品</dt><dd>粉体塗料、マスキング材、吊り治具、保護具など。</dd></div>
              <div><dt>開業講習セット</dt><dd>受講料33万円（税別）。</dd></div>
            </dl>
            <p className="startup-prose">開業予算には、追加の機材、搬入・工事、材料費、物件を借りる場合の契約費用も見込みます。設備の仕様と設置費は、現場の条件を確認したうえで正式見積もりでご案内します。</p>
            <div className="startup-cost-comparison" id="monthly-cost">
              <h3>毎月の外注費と内製費を比べる</h3>
              <p className="startup-prose">同じ部品・点数・施工範囲で、月あたりの費用を比べます。下地処理などを引き続き外注する場合は、その費用も内製後の支出に含めます。</p>
              <dl className="startup-topics startup-cost-pair">
                <div>
                  <dt>現在の外注費</dt>
                  <dd>外注施工代 ＋ 往復の送料や持ち込み費 ＋ 追加加工費</dd>
                </div>
                <div>
                  <dt>内製後にかかる費用</dt>
                  <dd>塗料・消耗品 ＋ 作業時間分の人件費 ＋ 電気代 ＋ 設備費の月割り・維持費 ＋ 残る外注費</dd>
                </div>
              </dl>
              <p className="startup-prose">塗装の依頼が少ない月でも費用を賄えるかを見ておくと、購入する設備の範囲や導入時期を決めやすくなります。</p>
            </div>
          </div>
        </section>

        <section className="startup-section startup-shell" id="course" aria-labelledby="startup-course-title">
          <div className="startup-feature">
            <div>
              <h2 id="startup-course-title">開業におすすめ！ 2日間の講習セット</h2>
              <div className="startup-course-offer">
                <div>
                  <p className="startup-course-label">開業サポートパック</p>
                  <p className="startup-course-price"><strong>33万円</strong><small>（税別）</small></p>
                </div>
                <div className="startup-course-inclusions">
                  <p>1社2名まで。2日間、持ち込み部品の種類は自由です。分からないところは、納得いくまで丁寧にお教えします。</p>
                  <p>営業・原価資料付き。<strong>受講後も、LINEなどでご質問にお答えします。</strong></p>
                </div>
              </div>
            </div>
            <figure className="startup-feature-media">
              <img src="/assets/startup-hands-on-training.webp" width="1200" height="800" loading="lazy" decoding="async" alt="作業台で持ち込み部品のマスキング箇所を一緒に確認する講師と受講者" />
              <figcaption>持ち込み部品を使う実技講習のイメージ（AI生成）</figcaption>
            </figure>
          </div>
          <div className="startup-topics">
            <article>
              <h3>施工と仕上がりの確認</h3>
              <p>持ち込み部品の形状に合わせて、ねじ穴や合わせ面などのマスキングを確認します。機械操作、粉体塗装、焼付、検品を行い、不具合が出たときの原因の絞り込み方や、補修・再施工の判断を学びます。</p>
            </article>
            <article>
              <h3>受注から見積もり、集客まで</h3>
              <p>受けられる施工の範囲を決め、材料費や作業時間をもとに原価と価格を考えます。受付時にお客様と確認する塗装範囲、仕上がり、納期を整理し、見積もりを作ります。施工見本や写真を使った既存のお客様への案内、ショップとの連携、Web・SNSでの発信も扱います。</p>
            </article>
          </div>
          <p className="startup-note">乾燥炉などの機材は個別見積もりです。実習内容は持ち込み部品の材質・状態や安全条件に応じて調整します。塗料、持ち込み部品、追加消耗品などは別途です。</p>
          <div className="startup-actions">
            <a className="button button-primary" href="/?equipment=opening#consult">講習セットについて相談する</a>
          </div>
        </section>

        <section className="startup-section startup-contact" aria-labelledby="startup-contact-title">
          <div className="startup-shell">
            <h2 id="startup-contact-title">パウダーコートの開業を相談する</h2>
            <p className="startup-prose">「まずはバイクホイールを受けたい」「既存のコンプレッサーを使えるか知りたい」など、分かる範囲でお聞かせください。塗りたい部品、想定する処理点数、設置予定の地域や使える設備から、必要な機材と見積もり項目を整理します。</p>
            <div className="startup-actions">
              <a className="button button-primary" href="/?equipment=opening#consult">開業相談の案内を見る</a>
              <div className="startup-phone">
                <a href="tel:05017850018">050-1785-0018</a>
                <span>平日 9:00〜18:00</span>
              </div>
            </div>
            <p className="startup-note">相談欄で、電話の前に相談内容をメモにまとめられます。</p>
          </div>
        </section>
      </main>

      <footer className="startup-footer">
        <a className="catalog-brand" href="/" aria-label="研装システムズ トップへ">
          <img className="brand-logo" src="/assets/logo-kensou-systems-dark.png" alt="" width="1400" height="356" loading="lazy" />
        </a>
        <small>© KENSO SYSTEMS</small>
      </footer>
    </div>
  );
}
