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
          <a href="#training">内製化・開業支援</a>
          <a href="#divisions">事業部案内</a>
          <a href="#equipment-faq">よくある質問</a>
        </nav>
        <a className="catalog-header-cta" href="#consult">設備導入を相談</a>
      </header>

      <main id="top" className="catalog-page">
        <section className="catalog-hero" aria-labelledby="catalog-title">
          <div className="catalog-hero-copy">
            <p className="eyebrow">表面処理・粉体塗装設備</p>
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
              <img src="/assets/powder-curing-oven-generated.webp" alt="粉体塗装用乾燥炉のAI生成参考イメージ" width="1536" height="1024" loading="lazy" />
              <figcaption>AI生成による参考イメージ / 実機写真へ差し替え予定</figcaption>
            </figure>
            <div className="catalog-product-copy">
              <div className="product-status is-planning"><span>04</span> 取扱準備中・導入相談受付</div>
              <p className="product-type">POWDER CURING OVEN</p>
              <h3>ワーク寸法と焼付条件から考える、<br />粉体塗装用乾燥炉。</h3>
              <p>ワーク寸法に合わせて選べる2サイズをご用意する予定です。必要温度・保持時間、処理量、設置スペース、搬入経路、利用可能な熱源を確認し、受注仕様を検討します。</p>
              <div className="oven-size-grid" aria-label="乾燥炉の予定サイズ">
                <div><span>120サイズ</span><strong>炉内内寸 約1200 × 1200 × 1200mm</strong><b>販売価格 1,200,000円（税別）</b><small className="oven-power-spec">最高温度 220℃／三相200V・6kW</small><small>小規模施工・4ミニショップ・バイクホイール前後におすすめ</small></div>
                <div><span>180サイズ</span><strong>横幅 約1700 × 奥行 約700 × 高さ 約2000mm</strong><b>販売価格 1,800,000円（税別）</b><small className="oven-power-spec">最高温度 220℃／三相200V・10～15kW</small><small>バイクフレームや自動車ホイール4本の焼付におすすめ</small></div>
              </div>
              <div className="planning-block">
                <span>案件ごとに確認</span>
                <ul><li>最大ワーク寸法・重量・数量</li><li>粉体メーカー指定の焼付条件</li><li>炉内有効寸法・扉開口</li><li>電源・熱源・換気・排気条件</li><li>設置場所・搬入経路・安全設備</li></ul>
              </div>
              <p className="planning-note">溶剤塗料や可燃性物質の加熱用途を示すものではありません。掲載価格は税別です。送料・搬入設置費等は正式見積に明記します。</p>
              <div className="product-actions">
                <a className="button button-primary" href="/drying-oven">乾燥炉の詳細を見る</a>
                <a className="button button-ghost-light" href="/?equipment=oven#consult">仕様を相談する</a>
              </div>
            </div>
          </article>
        </section>

        <section className="coating-business" aria-labelledby="coating-business-title">
          <div className="coating-business-copy">
            <p className="eyebrow">粉体塗装の内製化・新規開業</p>
            <h2 id="coating-business-title">必要な仕上げを、<br />自社の仕事に。</h2>
            <p className="coating-business-lead">レストアや自社製品の仕上げに必要な粉体塗装を内製化。粉体塗装サービスで開業したい方にもおすすめです。</p>
            <ul className="coating-business-points"><li>外注待ちを減らし、納期を自社で管理</li><li>試作・小ロット・再塗装にも柔軟に対応</li><li>レストア事業の新しいサービスとして展開</li></ul>
            <a className="button button-primary" href="/drying-oven">乾燥炉と施工例を見る</a>
          </div>
          <figure className="coating-examples-visual">
            <img src="/assets/powder-coating-examples-transparent.webp" width="1535" height="1024" loading="lazy" alt="赤いバイクフレーム、黒いバイクホイール前後、オレンジのスプリングの粉体塗装例" />
            <figcaption>実際の粉体塗装例をもとにAIで背景処理・構成したイメージ</figcaption>
          </figure>
        </section>

        <section className="catalog-section catalog-training" id="training" aria-labelledby="training-title">
          <div className="catalog-heading catalog-heading-split">
            <div><p className="eyebrow eyebrow-dark">COATING BUSINESS SUPPORT</p><h2 id="training-title">設備を入れて終わりではなく、<br />仕上げを仕事にできるまで。</h2></div>
            <p>粉体塗装やセラミックコーティングを自社施工したい方、塗装サービスを開業したい方へ。実際のワークを使い、施工の判断とお客様への説明まで身につける実地講座です。</p>
          </div>

          <div className="training-grid">
            <article className="training-card">
              <div className="training-card-head"><span>01 / IN-HOUSE</span><strong>1日・1社2名まで</strong></div>
              <h3>内製化スタートパック</h3>
              <p className="training-audience">レストアや自社製品の粉体塗装を、外注から自社施工へ切り替えたいショップ向け。</p>
              <ul className="training-topics">
                <li><strong>機械操作</strong><span>始動、条件設定、停止、清掃、日常点検</span></li>
                <li><strong>粉体塗装</strong><span>下地確認、アース、吹付、膜厚、焼付、仕上がり確認</span></li>
                <li><strong>塗装トラブル</strong><span>ピンホール、ブツ、ゆず肌、膜厚ムラ、密着不良の原因整理</span></li>
                <li><strong>マスキング</strong><span>ネジ穴、合わせ面、アース位置を守る材料選びと処理のコツ</span></li>
                <li><strong>お客様の視点</strong><span>色・艶・塗装範囲・納期・再施工条件など、受付時に確認すべき点</span></li>
              </ul>
              <div className="training-card-foot">
                <div className="training-price"><span>受講料</span><strong>198,000<small>円（税別）</small></strong></div>
                <p>持込ワーク1種類／手順書／受講後30日・オンライン相談2回</p>
                <a className="button button-primary" href="/?equipment=internalization#consult">内製化について相談する</a>
              </div>
            </article>

            <article className="training-card training-card-featured">
              <div className="training-card-head"><span>02 / BUSINESS START</span><strong>2日・1社2名まで</strong></div>
              <h3>開業サポートパック</h3>
              <p className="training-audience">施工技術だけでなく、受注の準備から顧客獲得まで整えて粉体塗装サービスを始めたい方向け。</p>
              <ul className="training-topics">
                <li><strong>施工技術</strong><span>機械操作、粉体塗装、焼付、検品を実際のワークで実習</span></li>
                <li><strong>トラブル対応</strong><span>不具合の原因切り分けと、再施工・補修の判断</span></li>
                <li><strong>マスキング</strong><span>形状別の処理、見切り、外してはいけない範囲の確認</span></li>
                <li><strong>顧客対応</strong><span>仕上がり、塗装範囲、納期、施工限界を事前に共有する方法</span></li>
                <li><strong>営業</strong><span>サービスメニュー、原価計算、価格設定、受付・見積の作り方</span></li>
                <li><strong>顧客の集め方</strong><span>施工見本と事例写真、既存客への提案、ショップ連携、Web・SNSでの発信</span></li>
              </ul>
              <div className="training-card-foot">
                <div className="training-price"><span>受講料</span><strong>330,000<small>円（税別）</small></strong></div>
                <p>持込ワーク2種類／営業・原価資料／受講後60日・オンライン相談4回</p>
                <a className="button button-primary" href="/?equipment=opening#consult">開業について相談する</a>
              </div>
            </article>

            <article className="training-card training-card-onsite">
              <div>
                <div className="training-card-head"><span>03 / ON-SITE</span><strong>導入先で実施</strong></div>
                <h3>出張実地講座</h3>
                <p className="training-audience">導入した設備、作業導線、普段扱うワークに合わせて、自社の現場で確認したい事業者向け。</p>
              </div>
              <ul className="training-topics">
                <li><strong>現場確認</strong><span>設備配置、安全条件、作業の流れ、清掃・保管方法を確認</span></li>
                <li><strong>実地施工</strong><span>実際のワークで条件設定、マスキング、塗装、焼付、検品</span></li>
                <li><strong>作業標準化</strong><span>担当者間で仕上がりを揃えるための手順と確認項目を整理</span></li>
              </ul>
              <div className="training-card-foot">
                <div className="training-price"><span>講座料</span><strong>132,000<small>円／日（税別）</small></strong></div>
                <p>交通費・宿泊費は別途実費。内容と必要日数は事前打ち合わせで決定します。</p>
                <a className="button button-primary" href="/?equipment=onsite#consult">出張講座を相談する</a>
              </div>
            </article>

            <article className="training-card training-card-onsite training-card-cerakote">
              <div>
                <div className="training-card-head"><span>04 / CERAMIC COATING</span><strong>内容・料金は個別見積</strong></div>
                <h3>セラコート実技講習</h3>
                <p className="training-audience">米国生まれの薄膜セラミックコーティング「CERAKOTE®」を、車・バイクのレストアやカスタム、自社製品の仕上げに取り入れたい事業者向け。</p>
              </div>
              <ul className="training-topics">
                <li><strong>ガン設定</strong><span>ノズル、エア圧、吐出量、パターン幅をワークと塗料に合わせる</span></li>
                <li><strong>混合比</strong><span>シリーズ別の計量、触媒比率、ろ過、可使時間をTDSに沿って確認</span></li>
                <li><strong>塗装の注意点</strong><span>前処理、膜厚、塗り重ね、エッジ、フラッシュオフ、硬化条件</span></li>
                <li><strong>トラブル対応</strong><span>タレ、ドライスプレー、ゆず肌、ピンホール、密着不良、艶・色差の原因整理</span></li>
                <li><strong>シリーズ選定</strong><span>素材、用途、硬化温度、耐熱・耐薬品・耐候条件から適切な製品を選ぶ</span></li>
              </ul>
              <div className="training-card-foot">
                <div className="cerakote-performance"><span>高耐熱・耐薬品用途にも</span><p>一部製品は公式TDS上、塗膜安定性2,000°F超（約1,093℃）の試験値があります。色安定性を含む性能・施工条件は製品ごとに異なります。</p></div>
                <p>対象ワーク、使用シリーズ、硬化方法を確認後、講習内容・日程・料金をご案内します。</p>
                <a className="button button-primary" href="/?equipment=cerakote#consult">セラコート講習を相談する</a>
              </div>
            </article>
          </div>
          <p className="training-note">※設備、塗料、持込ワーク、追加消耗品等は別途です。材質・状態や安全条件により実習内容を変更する場合があります。技能資格の付与、売上・集客・開業成功を保証する講座ではありません。セラコート講習は研装システムズによる実技講習で、NIC Industries, Inc.の公式認定講座ではありません。CERAKOTE®はNIC Industries, Inc.の登録商標です。</p>
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
              <a className="catalog-division-card catalog-division-link" href="https://web.kensosystems.jp/" target="_blank" rel="noreferrer" aria-label="Web制作事業部・やさしいWeb制作を見る">
              <span>WEB CREATION DIVISION</span>
              <small>公開中</small>
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
            <div className="catalog-phone-contact">
              <strong>お電話でのご相談</strong>
              <a href="tel:05017850018">050-1785-0018</a>
              <p>受付時間　平日 9:00〜18:00</p>
            </div>
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
