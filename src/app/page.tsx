import Image from "next/image";
import Link from "next/link";

import { ButtonCTA } from "@/components/ui/ButtonLink";
import { RecomendationCard } from "@/components/ui/RecomendationCards";
import { Instagram } from "lucide-react";

import imgLogo from "/public/bg-fundo.png";
import imgLogoInsta from "/public/logo-insta.png";
import imgLogoSquare from "/public/logo.png";
import imgPizzaDoces from "/public/pizza-doce.png";
import imgPizzaPremium from "/public/pizza-premium.png";
import imgPizzaSimples from "/public/pizza-simple.png";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <div className="flex h-[50vh] w-full flex-col bg-zinc-800">
        <div className="h-[62vh] w-[100%] bg-black  opacity-60 md:h-[50vh]">
          <Image
            src={imgLogo}
            className=" h-full object-cover object-center md:w-full md:object-center"
            alt="Logo Empresa"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="absolute flex h-[30vh] w-auto flex-col items-center  px-3 md:h-[40vh] md:w-[50%] md:items-start md:justify-center md:pl-[10%] lg:h-[40vh] lg:pl-[15%] ">
          <Image
            src={imgLogoSquare}
            className="w-[40%]"
            alt="Logo Pizzaria"
            quality={100}
            placeholder="empty"
          />

          <span className=" w-full select-none whitespace-normal px-3 text-justify text-xs font-medium text-white sm:text-sm md:left-[1.3rem] md:w-[400px] md:p-1 ">
            Pizzas exageradamente recheadas e saborosas, massas frescas, de
            fabricação própria, produzidas com ingredientes da melhor qualidade.
          </span>

          <div className="mt-3  md:mt-16 ">
            <ButtonCTA />
          </div>
        </div>
      </div>
      <div className=" flex h-full  w-full flex-col items-center bg-zinc-300">
        <div className="mt-3 flex h-full w-[92vw] flex-col items-center md:h-[45rem] md:w-[85vw] md:justify-center ">
          <div className="my-10 text-4xl font-semibold text-zinc-500 md:text-5xl">
            CARDÁPIO
            <div className="ml-2 mt-[5px] h-[4px] w-32 bg-red-600" />
          </div>

          <div className="relative flex h-[50vh] w-[90vw] touch-pan-x snap-x scroll-p-4 flex-nowrap items-center space-x-5 overflow-x-auto overscroll-x-auto md:h-[70vh] md:max-w-[65vw]">
            <RecomendationCard
              imageData={imgPizzaSimples}
              altName="imagem pizza simples"
              typeName="Simples"
            />
            <RecomendationCard
              imageData={imgPizzaDoces}
              altName="imagem pizza doces"
              typeName="Doces"
            />
            <RecomendationCard
              imageData={imgPizzaPremium}
              altName="imagem pizza especiais"
              typeName="Especiais"
            />
          </div>
        </div>
        <div className="flex h-[8rem] w-full items-center justify-center md:h-[10rem] ">
          <ButtonCTA />
        </div>
      </div>
      <div className="flex h-72 w-full flex-col items-center justify-center bg-zinc-900">
        <div className="relative h-20 w-40">
          <Image
            src={imgLogoInsta}
            className="object-cover object-right-top md:w-full md:object-center"
            alt="Logo Empresa"
            quality={100}
            width={978}
            height={373}
          />
        </div>
        <Link
          className="flex h-14 w-auto items-center justify-center rounded-md bg-blue-500 px-4 text-base font-semibold text-white md:h-11 md:text-sm"
          href="https://www.instagram.com/zpizzadelivery/"
        >
          <Instagram className="h-12" />
          <span className="pl-4">Siga o nosso perfil</span>
        </Link>
      </div>
    </main>
  );
}
