import type { Metadata } from "next";
import "./globals.css";
import { Bodoni_Moda, Inter } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: site.brand.name,
    template: `%s · ${site.brand.name}`
  },
  description: site.brand.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.brand.name,
    description: site.brand.description,
    url: site.url,
    siteName: site.brand.name,
    locale: "es_PA",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${bodoni.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-800">
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
