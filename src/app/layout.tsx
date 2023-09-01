import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { Header } from "@/components/Header";
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
        <div className="flex flex-1 flex-col bg-zinc-800">
          <Header />
          <Link href="/signin">login</Link>
          {children}
          <footer className="mono flex justify-between bg-red-600 px-4 py-5 font-medium text-white">
            <div>ZPizza @2023 - Todos os direitos reservados </div>
            <div>
              Desenvolvido por{" "}
              <Link
                className="font-semibold"
                href="http://ludrianowashington.vercel.io"
              >
                Ludriano Washington
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
