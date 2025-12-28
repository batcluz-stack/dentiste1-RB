import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google"; // Fraunces: Soft-serif avec beaucoup de personnalité

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  // axes: ['SOFT', 'WONK'] // Optionnel, Fraunces est très customisable
});

export const metadata: Metadata = {
  title: "Cabinet Dentaire - Soins Avancés",
  description: "Soins dentaires professionnels et sans douleur pour toute la famille. Prenez rendez-vous dès aujourd'hui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${jakarta.variable} ${fraunces.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
