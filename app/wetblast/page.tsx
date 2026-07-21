import type { Metadata } from "next";
import WetblastPage from "../WetblastPage";

export const metadata: Metadata = {
  title: "大型ウェットブラストマシン｜ホイール・エンジン対応",
  description: "ホイールや大型エンジンに対応する大型ウェットブラストマシン。本体電源AC100V、電動ワイパー搭載。実機デモと導入相談を受け付けています。",
  alternates: { canonical: "/wetblast" },
};

export default function WetblastRoute() {
  return <WetblastPage />;
}
