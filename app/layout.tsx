import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "研装システムズ｜ウェットブラスト・サンドブラスト・粉体塗装設備";
const description = "研装システムズの機材販売・導入相談。大型ウェットブラスト、開発予定のサンドブラスト、粉体塗装機、粉体塗装用乾燥炉を、ワークと設置環境に合わせて検討します。";

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
    icons: { icon: "/favicon.png" },
    alternates: { canonical: base },
    robots: { index: false, follow: false },
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
