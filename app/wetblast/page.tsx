import type { Metadata } from "next";
import WetblastPage from "../WetblastPage";

export const metadata: Metadata = {
  title: "大型ウェットブラストマシン｜ホイール・エンジン対応｜研装システムズ",
  description: "ホイールや大型エンジンに対応する大型ウェットブラストマシンを898,000円で販売。本体AC100V、推奨コンプレッサー5.5kW、電動ワイパー搭載。実機デモ受付中。",
  alternates: { canonical: "/wetblast" },
};

export default function WetblastRoute() {
  return <WetblastPage />;
}
