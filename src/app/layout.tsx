import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/partials/Footer";
import { Header } from "@/components/partials/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZPizza Delivery",
  description:
    "Massas Frescas, De Fabricação Própria, Produzidas com Ingredientes da Melhor Qualidade. Pizzaria em Recife com pizzas e massas artesanais.",
  keywords: "pizza, pizzaria, delivery, entrega, pedidos, zpizza delivery",
  authors: [
    { name: "Ludriano Washington", url: "http://ludrianowashington.vercel.io" },
  ],
  viewport: { width: "device-width", initialScale: 1 },

  openGraph: {
    type: "website",
    description:
      "Massas Frescas, De Fabricação Própria, Produzidas com Ingredientes da Melhor Qualidade. Pizzaria em Recife com pizzas e massas artesanais.",
    title: "ZPizza Delivery",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-1 scroll-m-0 flex-col bg-zinc-800 bg-scroll">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
