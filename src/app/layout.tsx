import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kitap Kafamda - En Keyifli Öğrenme Yolculuğu",
  description:
    "Kitapları özetleyen ve quizlerle kursa dönüştüren yenilikçi SaaS platformu! Eğitmenler, öğrenciler ve kitap severler için kişiselleştirilmiş öğrenme deneyimi sunan yapay zeka destekli çözümle hızlı ve etkili eğitimler oluşturun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PCRMTJTC" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
