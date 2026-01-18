import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { site } from "@/content/site";
import AppProviders from "@/providers/AppProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="es" className={`${inter.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans font-light text-slate-800">
        <AppProviders>
          <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
