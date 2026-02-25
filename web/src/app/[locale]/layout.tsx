import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { RootProvider } from 'fumadocs-ui/provider/next';

import ClientLayoutWrapper from "@/src/components/client-layout-wrapper";
import BottonWhatsapp from "@/src/components/bottonWhatsapp";
import LanguageSwitcher from "@/src/components/language-switcher";
import ScrollToTop from "@/src/components/scroll-to-top"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transportadora Garbuio",
  description: "Transportadora Garbuio",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // ✅ Promise no Next 16
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 🔥 obrigatório para next-intl
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider>
          <ClientLayoutWrapper>
            <RootProvider>
              {children}
            </RootProvider>
            <BottonWhatsapp />
            <ScrollToTop />
            <LanguageSwitcher />
          </ClientLayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
