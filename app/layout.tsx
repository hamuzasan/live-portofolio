import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamzah Fadillah — Portfolio",
  description:
    "Portfolio web developer intern candidate dengan fokus web development, AI integration, dan digitalisasi proses bisnis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${geist.variable} ${sora.variable} ${jetBrainsMono.variable} bg-background font-sans text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
