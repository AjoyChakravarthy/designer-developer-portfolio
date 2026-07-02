import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajoychakravarthy.design"),
  title: `${site.name} — ${site.role}`,
  description:
    "Frontend developer & designer crafting interfaces at the intersection of code and craft — typography-first, motion with restraint, shipped to production.",
  openGraph: {
    title: `${site.name} — Design Engineer`,
    description: "Portfolio of a frontend developer & designer based in Brooklyn, NY.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-ink-900 font-mono text-chalk antialiased">{children}</body>
    </html>
  );
}
