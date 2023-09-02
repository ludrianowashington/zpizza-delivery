import Image from "next/image";
import Link from "next/link";

import imgLogo from "../../public/bg-fundo.png";
import imgLogoSquare from "../../public/logo.png";

export default async function Home() {
  const data = await fetch("https://dummyjson.com/products");
  const { products } = await data.json();

  return (
    <main className="flex w-full flex-col">
      <div className="flex h-full w-[100%] flex-col">
        <div className="h-[82vh] w-[100%] bg-black opacity-70 md:h-[100vh]">
          <Image
            src={imgLogo}
            className="h-full object-cover md:w-full"
            alt="Logo Empresa"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="absolute top-28 flex h-[80vh] w-full flex-col items-center px-3 md:h-[96vh] md:items-start md:pl-[10%] ">
          <Image
            src={imgLogoSquare}
            className="w-[65%] md:w-72"
            alt="Logo Pizzaria"
            quality={100}
            placeholder="empty"
          />

          <span className=" w-full select-none whitespace-normal px-3 text-justify text-base font-medium text-white md:left-[2rem] md:w-[400px] md:p-1 ">
            Pizzas exageradamente recheadas e saborosas, massas frescas, de
            fabricação própria, produzidas com ingredientes da melhor qualidade.
          </span>

          <Link
            href="/"
            className="mt-16 flex h-14 w-fit animate-pulse items-center justify-center rounded-lg bg-red-600 px-4 text-sm font-semibold text-white hover:opacity-90 md:animate-bounce "
          >
            CLIQUE AQUI E PEÇA AGORA
          </Link>
        </div>
      </div>
    </main>
  );
}
