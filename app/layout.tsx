import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {} from "next/font/google";

export const metadata: Metadata = {
  title: "Muhammad Irfa' Maulana | Portfolio",
  description: "Portfolio Muhammad Irfa' Maulana, lulusan S1 Teknik Informatika dengan pengalaman pengembangan aplikasi web dan terbuka untuk berbagai kesempatan kerja."
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
