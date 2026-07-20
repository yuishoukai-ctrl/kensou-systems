"use client";

import { FormEvent, useMemo, useState } from "react";

type LeadData = {
  consultation: string;
  workName: string;
  workDetails: string;
  compressor: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  prefecture: string;
  timing: string;
  note: string;
};

const initialData: LeadData = {
  consultation: "来訪デモ",
  workName: "",
  workDetails: "",
  compressor: "不明・確認したい",
  company: "",
  name: "",
  phone: "",
  email: "",
  prefecture: "",
  timing: "",
  note: "",
};

const fieldLabels: Record<keyof LeadData, string> = {
  consultation: "相談方法",
  workName: "処理したいワーク",
  workDetails: "材質・寸法・重量",
  compressor: "コンプレッサー",
  company: "会社名・屋号",
  name: "お名前",
  phone: "電話番号",
  email: "メールアドレス",
  prefecture: "納品予定都道府県",
  timing: "希望時期・候補日",
  note: "ご質問・補足",
};

function makeSummary(data: LeadData) {
  const lines = (Object.keys(fieldLabels) as (keyof LeadData)[]).map(
    (key) => `【${fieldLabels[key]}】\n${data[key] || "未入力"}`,
  );
  return [
    "大型ウェットブラストマシン デモ・導入相談",
    "",
    ...lines,
    "",
    "※この内容だけでは注文・予約金の支払いは確定しません。",
  ].join("\n");
}

export default function LeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<LeadData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  const summary = useMemo(() => makeSummary(data), [data]);
  const mailto = `mailto:?subject=${encodeURIComponent("大型ウェットブラストマシン デモ・導入相談")}&body=${encodeURIComponent(summary)}`;

  function updateField(key: keyof LeadData, value: string) {
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  function validateStepOne() {
    const nextErrors: Partial<Record<keyof LeadData, string>> = {};
    if (!data.workName.trim()) nextErrors.workName = "処理したいワークを入力してください。";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateStepTwo() {
    const nextErrors: Partial<Record<keyof LeadData, string>> = {};
    if (!data.company.trim()) nextErrors.company = "会社名・屋号を入力してください。";
    if (!data.name.trim()) nextErrors.name = "お名前を入力してください。";
    if (!data.phone.trim()) nextErrors.phone = "電話番号を入力してください。";
    if (!data.email.trim()) {
      nextErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "メールアドレスの形式を確認してください。";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");
    if (step === 1) {
      if (validateStepOne()) {
        setStep(2);
        setStatus("idle");
        window.setTimeout(() => document.getElementById("lead-form-title")?.focus(), 0);
      } else {
        setStatus("error");
        setStatusMessage("入力内容を確認してください。");
      }
      return;
    }

    if (!validateStepTwo()) {
      setStatus("error");
      setStatusMessage("必須項目を確認してください。");
      return;
    }

    setStatus("loading");
    setStatusMessage("相談内容を作成しています。");
    window.setTimeout(() => {
      setCompleted(true);
      setStatus("success");
      setStatusMessage("相談内容を作成しました。");
    }, 550);
  }

  async function copySummary() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(summary);
      setStatus("success");
      setStatusMessage("相談内容をコピーしました。販売元の連絡先へ貼り付けて送れます。");
    } catch {
      setStatus("error");
      setStatusMessage("自動コピーできませんでした。下の文章を選択してコピーしてください。");
    }
  }

  if (completed) {
    return (
      <div className="lead-form lead-success" aria-live="polite">
        <span className="form-kicker">相談内容 / READY</span>
        <h3 id="lead-form-title" tabIndex={-1}>入力内容をまとめました。</h3>
        <p>
          現在は販売元の送信先を設定する前の限定公開版です。内容をコピーするか、メールアプリで開いてご利用ください。
        </p>
        <textarea className="summary-box" value={summary} readOnly aria-label="作成された相談内容" />
        <div className="form-actions form-actions-stacked">
          <button className="button button-primary button-dark-text" type="button" onClick={copySummary}>相談内容をコピー</button>
          <a className="button button-outline-dark" href={mailto}>メールアプリで開く</a>
          <button className="text-button" type="button" onClick={() => { setCompleted(false); setStep(1); setStatus("idle"); setStatusMessage(""); }}>
            入力内容を修正する
          </button>
        </div>
        <p className={`form-status ${status === "error" ? "is-error" : ""}`} role="status">{statusMessage}</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <div>
          <span className="form-kicker">STEP {step} / 2</span>
          <h3 id="lead-form-title" tabIndex={-1}>{step === 1 ? "ワークと設備を確認" : "連絡先と希望時期"}</h3>
        </div>
        <div className="step-meter" aria-label={`全2ステップ中 ${step} ステップ目`}>
          <span className="is-active" />
          <span className={step === 2 ? "is-active" : ""} />
        </div>
      </div>

      {step === 1 ? (
        <div className="form-fields">
          <fieldset>
            <legend>相談方法 <em>必須</em></legend>
            <div className="choice-grid">
              {["来訪デモ", "オンライン実演", "テスト加工相談"].map((choice) => (
                <label className="choice-card" key={choice}>
                  <input
                    type="radio"
                    name="consultation"
                    value={choice}
                    checked={data.consultation === choice}
                    onChange={(event) => updateField("consultation", event.target.value)}
                  />
                  <span>{choice}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field-label" htmlFor="workName">
            処理したいワーク <em>必須</em>
            <input
              id="workName"
              value={data.workName}
              onChange={(event) => updateField("workName", event.target.value)}
              placeholder="例：17インチのアルミホイール"
              aria-invalid={Boolean(errors.workName)}
              aria-describedby={errors.workName ? "workName-error" : undefined}
            />
            {errors.workName && <span className="field-error" id="workName-error">{errors.workName}</span>}
          </label>

          <label className="field-label" htmlFor="workDetails">
            材質・おおよその寸法・重量 <small>不明可</small>
            <textarea
              id="workDetails"
              value={data.workDetails}
              onChange={(event) => updateField("workDetails", event.target.value)}
              placeholder="例：アルミ、直径約430mm、約9kg"
              rows={3}
            />
          </label>

          <label className="field-label" htmlFor="compressor">
            コンプレッサー <em>必須</em>
            <select id="compressor" value={data.compressor} onChange={(event) => updateField("compressor", event.target.value)}>
              <option>5.5kW以上</option>
              <option>200V・2.2kW</option>
              <option>100Vコンプレッサー</option>
              <option>不明・確認したい</option>
              <option>これから用意する</option>
            </select>
          </label>
          <p className="inline-caution">推奨は5.5kWです。低出力機では噴射力・処理速度が低下します。</p>
        </div>
      ) : (
        <div className="form-fields form-fields-two-column">
          <label className="field-label" htmlFor="company">
            会社名・屋号 <em>必須</em>
            <input id="company" value={data.company} onChange={(event) => updateField("company", event.target.value)} aria-invalid={Boolean(errors.company)} />
            {errors.company && <span className="field-error">{errors.company}</span>}
          </label>
          <label className="field-label" htmlFor="name">
            お名前 <em>必須</em>
            <input id="name" value={data.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>
          <label className="field-label" htmlFor="phone">
            電話番号 <em>必須</em>
            <input id="phone" type="tel" inputMode="tel" value={data.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="例：090-0000-0000" aria-invalid={Boolean(errors.phone)} />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </label>
          <label className="field-label" htmlFor="email">
            メールアドレス <em>必須</em>
            <input id="email" type="email" inputMode="email" value={data.email} onChange={(event) => updateField("email", event.target.value)} placeholder="name@example.jp" aria-invalid={Boolean(errors.email)} />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </label>
          <label className="field-label" htmlFor="prefecture">
            納品予定都道府県 <small>任意</small>
            <input id="prefecture" value={data.prefecture} onChange={(event) => updateField("prefecture", event.target.value)} placeholder="例：埼玉県" />
          </label>
          <label className="field-label" htmlFor="timing">
            希望時期・デモ候補日 <small>任意</small>
            <input id="timing" value={data.timing} onChange={(event) => updateField("timing", event.target.value)} placeholder="例：8月上旬の平日午後" />
          </label>
          <label className="field-label field-wide" htmlFor="note">
            ご質問・補足 <small>任意</small>
            <textarea id="note" value={data.note} onChange={(event) => updateField("note", event.target.value)} placeholder="設置場所、搬入口、コンプレッサー型式など" rows={4} />
          </label>
        </div>
      )}

      <div className="form-actions">
        {step === 2 && <button className="button button-outline-dark" type="button" onClick={() => { setStep(1); setStatus("idle"); }}>戻る</button>}
        <button className="button button-primary button-dark-text" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "作成中…" : step === 1 ? "連絡先の入力へ" : "相談内容を作成する"}
        </button>
      </div>
      <p className="form-legal">この操作だけでは注文・予約金の支払いは確定しません。</p>
      <p className={`form-status ${status === "error" ? "is-error" : ""}`} aria-live="polite" role={status === "error" ? "alert" : "status"}>
        {statusMessage}
      </p>
    </form>
  );
}
