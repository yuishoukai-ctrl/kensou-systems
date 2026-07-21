"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type EquipmentKey = "大型ウェットブラスト" | "サンドブラスト（開発予定）" | "粉体塗装機" | "粉体塗装用乾燥炉" | "一連設備" | "未定・相談したい";

type EquipmentLead = {
  equipments: EquipmentKey[];
  workName: string;
  workDetails: string;
  currentProcess: string;
  desiredFinish: string;
  volume: string;
  utilities: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  prefecture: string;
  timing: string;
  budget: string;
  note: string;
};

const equipmentOptions: EquipmentKey[] = [
  "大型ウェットブラスト",
  "サンドブラスト（開発予定）",
  "粉体塗装機",
  "粉体塗装用乾燥炉",
  "一連設備",
  "未定・相談したい",
];

const initialData: EquipmentLead = {
  equipments: ["一連設備"],
  workName: "",
  workDetails: "",
  currentProcess: "",
  desiredFinish: "",
  volume: "",
  utilities: "",
  company: "",
  name: "",
  phone: "",
  email: "",
  prefecture: "",
  timing: "",
  budget: "",
  note: "",
};

const queryEquipment: Record<string, EquipmentKey> = {
  wetblast: "大型ウェットブラスト",
  sandblast: "サンドブラスト（開発予定）",
  powder: "粉体塗装機",
  oven: "粉体塗装用乾燥炉",
  line: "一連設備",
};

const summaryLabels: Array<[keyof Omit<EquipmentLead, "equipments">, string]> = [
  ["workName", "対象ワーク"],
  ["workDetails", "材質・最大寸法・重量"],
  ["currentProcess", "現在の工程・困りごと"],
  ["desiredFinish", "希望する仕上がり"],
  ["volume", "処理量"],
  ["utilities", "電源・エア・換気等の設備状況"],
  ["company", "会社名・屋号"],
  ["name", "お名前"],
  ["phone", "電話番号"],
  ["email", "メールアドレス"],
  ["prefecture", "納品予定都道府県"],
  ["timing", "希望導入時期"],
  ["budget", "予算目安"],
  ["note", "ご質問・補足"],
];

function makeSummary(data: EquipmentLead) {
  return [
    "研装システムズ 設備導入相談",
    "",
    `【相談したい設備】\n${data.equipments.join("、") || "未選択"}`,
    ...summaryLabels.map(([key, label]) => `【${label}】\n${data[key] || "未入力・不明"}`),
    "",
    "※この内容だけでは注文・予約金の支払いは確定しません。",
  ].join("\n\n");
}

export default function EquipmentLeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<EquipmentLead>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const requested = queryEquipment[new URLSearchParams(window.location.search).get("equipment") ?? ""];
    if (!requested) return;
    const timer = window.setTimeout(() => {
      setData((current) => ({ ...current, equipments: [requested] }));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const summary = useMemo(() => makeSummary(data), [data]);
  const mailto = `mailto:?subject=${encodeURIComponent("研装システムズ 設備導入相談")}&body=${encodeURIComponent(summary)}`;

  function update<K extends keyof EquipmentLead>(key: K, value: EquipmentLead[K]) {
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  function toggleEquipment(equipment: EquipmentKey) {
    const selected = data.equipments.includes(equipment);
    const next = selected
      ? data.equipments.filter((item) => item !== equipment)
      : [...data.equipments, equipment];
    update("equipments", next);
  }

  function validateContact() {
    const next: Record<string, string> = {};
    if (!data.company.trim()) next.company = "会社名・屋号を入力してください。";
    if (!data.name.trim()) next.name = "お名前を入力してください。";
    if (!data.phone.trim()) next.phone = "電話番号を入力してください。";
    if (!data.email.trim()) next.email = "メールアドレスを入力してください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "メールアドレスの形式を確認してください。";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    if (step === 1) {
      if (data.equipments.length === 0) {
        setErrors({ equipments: "相談したい設備を1つ以上選択してください。" });
        setStatus("error");
        setMessage("選択内容を確認してください。");
        return;
      }
      setStatus("idle");
      setStep(2);
      window.setTimeout(() => document.getElementById("equipment-form-title")?.focus(), 0);
      return;
    }

    if (!validateContact()) {
      setStatus("error");
      setMessage("必須項目を確認してください。");
      return;
    }

    setStatus("loading");
    setMessage("相談内容を作成しています。");
    window.setTimeout(() => {
      setCompleted(true);
      setStatus("success");
      setMessage("相談内容を作成しました。");
    }, 550);
  }

  async function copySummary() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(summary);
      setStatus("success");
      setMessage("相談内容をコピーしました。販売元の連絡先へ貼り付けて送れます。");
    } catch {
      setStatus("error");
      setMessage("自動コピーできませんでした。下の文章を選択してコピーしてください。");
    }
  }

  if (completed) {
    return (
      <div className="lead-form equipment-form lead-success" aria-live="polite">
        <span className="form-kicker">EQUIPMENT CONSULTATION / READY</span>
        <h3 id="equipment-form-title" tabIndex={-1}>相談内容をまとめました。</h3>
        <p>現在は販売元の送信先を設定する前の限定公開版です。内容をコピーするか、メールアプリで開いてご利用ください。</p>
        <textarea className="summary-box" value={summary} readOnly aria-label="作成された設備相談内容" />
        <div className="form-actions form-actions-stacked">
          <button className="button button-primary button-dark-text" type="button" onClick={copySummary}>相談内容をコピー</button>
          <a className="button button-outline-dark" href={mailto}>メールアプリで開く</a>
          <button className="text-button" type="button" onClick={() => { setCompleted(false); setStatus("idle"); setMessage(""); }}>
            入力内容を修正する
          </button>
        </div>
        <p className={`form-status ${status === "error" ? "is-error" : ""}`} role="status">{message}</p>
      </div>
    );
  }

  return (
    <form className="lead-form equipment-form" onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <div>
          <span className="form-kicker">STEP {step} / 2</span>
          <h3 id="equipment-form-title" tabIndex={-1}>{step === 1 ? "設備とワークを確認" : "連絡先と導入条件"}</h3>
        </div>
        <div className="step-meter" aria-label={`全2ステップ中 ${step} ステップ目`}><span className="is-active" /><span className={step === 2 ? "is-active" : ""} /></div>
      </div>

      {step === 1 ? (
        <div className="form-fields">
          <fieldset>
            <legend>相談したい設備 <em>必須・複数選択可</em></legend>
            <div className="equipment-choice-grid">
              {equipmentOptions.map((equipment) => (
                <label className="choice-card" key={equipment}>
                  <input type="checkbox" checked={data.equipments.includes(equipment)} onChange={() => toggleEquipment(equipment)} />
                  <span>{equipment}</span>
                </label>
              ))}
            </div>
            {errors.equipments && <span className="field-error">{errors.equipments}</span>}
          </fieldset>

          <div className="form-fields form-fields-two-column">
            <label className="field-label" htmlFor="equipment-work">
              対象ワーク <small>不明可</small>
              <input id="equipment-work" value={data.workName} onChange={(event) => update("workName", event.target.value)} placeholder="例：アルミホイール、エンジン部品" />
            </label>
            <label className="field-label" htmlFor="equipment-details">
              材質・最大寸法・重量 <small>不明可</small>
              <input id="equipment-details" value={data.workDetails} onChange={(event) => update("workDetails", event.target.value)} placeholder="例：アルミ、W500×D300×H400mm、15kg" />
            </label>
            <label className="field-label field-wide" htmlFor="current-process">
              現在の工程・困りごと <small>任意</small>
              <textarea id="current-process" value={data.currentProcess} onChange={(event) => update("currentProcess", event.target.value)} rows={3} placeholder="現在の洗浄・塗装方法、外注している工程など" />
            </label>
            <label className="field-label" htmlFor="desired-finish">
              希望する仕上がり <small>任意</small>
              <input id="desired-finish" value={data.desiredFinish} onChange={(event) => update("desiredFinish", event.target.value)} placeholder="例：黒色粉体塗装、つや消し" />
            </label>
            <label className="field-label" htmlFor="volume">
              処理量 <small>任意</small>
              <input id="volume" value={data.volume} onChange={(event) => update("volume", event.target.value)} placeholder="例：1日10個、1回4本" />
            </label>
            <label className="field-label field-wide" htmlFor="utilities">
              電源・エア・換気等の設備状況 <small>不明可</small>
              <input id="utilities" value={data.utilities} onChange={(event) => update("utilities", event.target.value)} placeholder="例：三相200Vあり、5.5kWコンプレッサーあり、換気設備は未確認" />
            </label>
          </div>
        </div>
      ) : (
        <div className="form-fields form-fields-two-column">
          <label className="field-label" htmlFor="equipment-company">会社名・屋号 <em>必須</em><input id="equipment-company" value={data.company} onChange={(event) => update("company", event.target.value)} aria-invalid={Boolean(errors.company)} />{errors.company && <span className="field-error">{errors.company}</span>}</label>
          <label className="field-label" htmlFor="equipment-name">お名前 <em>必須</em><input id="equipment-name" value={data.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} />{errors.name && <span className="field-error">{errors.name}</span>}</label>
          <label className="field-label" htmlFor="equipment-phone">電話番号 <em>必須</em><input id="equipment-phone" type="tel" inputMode="tel" value={data.phone} onChange={(event) => update("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} />{errors.phone && <span className="field-error">{errors.phone}</span>}</label>
          <label className="field-label" htmlFor="equipment-email">メールアドレス <em>必須</em><input id="equipment-email" type="email" inputMode="email" value={data.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} />{errors.email && <span className="field-error">{errors.email}</span>}</label>
          <label className="field-label" htmlFor="equipment-prefecture">納品予定都道府県 <small>任意</small><input id="equipment-prefecture" value={data.prefecture} onChange={(event) => update("prefecture", event.target.value)} placeholder="例：埼玉県" /></label>
          <label className="field-label" htmlFor="equipment-timing">希望導入時期 <small>任意</small><input id="equipment-timing" value={data.timing} onChange={(event) => update("timing", event.target.value)} placeholder="例：年内、未定" /></label>
          <label className="field-label" htmlFor="equipment-budget">予算目安 <small>任意</small><input id="equipment-budget" value={data.budget} onChange={(event) => update("budget", event.target.value)} placeholder="例：相談して決めたい" /></label>
          <label className="field-label field-wide" htmlFor="equipment-note">ご質問・補足 <small>任意</small><textarea id="equipment-note" value={data.note} onChange={(event) => update("note", event.target.value)} rows={4} placeholder="設置場所、搬入口、既設設備など" /></label>
        </div>
      )}

      <div className="form-actions">
        {step === 2 && <button className="button button-outline-dark" type="button" onClick={() => { setStep(1); setStatus("idle"); }}>戻る</button>}
        <button className="button button-primary button-dark-text" type="submit" disabled={status === "loading"}>{status === "loading" ? "作成中…" : step === 1 ? "連絡先の入力へ" : "設備相談を作成する"}</button>
      </div>
      <p className="form-legal">分からない項目は未入力で構いません。この操作だけでは注文・予約金の支払いは確定しません。</p>
      <p className={`form-status ${status === "error" ? "is-error" : ""}`} aria-live="polite" role={status === "error" ? "alert" : "status"}>{message}</p>
    </form>
  );
}
