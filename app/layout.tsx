import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "大型ウェットブラストマシン・粉体塗装設備｜研装システムズ";
const description = "大型ウェットブラストマシンを販売。ホイールや大型エンジンに対応し、本体AC100V・推奨コンプレッサー5.5kW・電動ワイパーを搭載。実機デモと設備導入相談を受け付けています。";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3002";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og-kensou-systems.png", base).toString();

  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/favicon-kensou.png" },
    alternates: { canonical: base },
    robots: { index: true, follow: true },
    verification: { google: "Sy0qaqc5xZChZ5OVI6b4BjaX153awfGcZPT_5zTGdEU" },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: base,
      title,
      description,
      siteName: "研装システムズ｜KENSO SYSTEMS",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "研装システムズのブラスト・粉体塗装設備" }],
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
