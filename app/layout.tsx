import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "大型ウェットブラストマシン｜ホイール・エンジン対応｜実機デモ受付中";
const description = "ホイールや大型エンジンに対応する大型ウェットブラストマシン。本体電源AC100V、電動ワイパー搭載。用途・設置条件・コンプレッサーを確認後、正式見積をご案内します。";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3002";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/favicon.png" },
    alternates: { canonical: base },
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: base,
      title,
      description,
      siteName: "LARGE WET BLAST SYSTEM",
      images: [{ url: socialImage, width: 1712, height: 909, alt: "大型ウェットブラストマシン 販売価格898,000円" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
