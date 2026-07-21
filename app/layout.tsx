import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "表面処理・粉体塗装設備｜ウェットブラスト・粉体塗装機・乾燥炉";
const description = "大型ウェットブラスト、粉体塗装機、粉体塗装用乾燥炉の機材販売・導入相談。下地処理から粉体塗装、焼付まで、ワークと設置環境に合わせて設備を検討します。";

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
      siteName: "SURFACE FINISH SYSTEMS",
      images: [{ url: socialImage, width: 1720, height: 909, alt: "大型ウェットブラスト・粉体塗装機・粉体塗装用乾燥炉" }],
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
