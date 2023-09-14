import type { Metadata } from "next";
//Fontes a utilizar: Noto_Serif, Poppins
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
    images: "/apple-touch-icon.png",
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
        <div className="flex w-full flex-col bg-scroll">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
