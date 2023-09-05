import Image from "next/image";
import Link from "next/link";

import { ButtonCTA } from "@/components/ui/ButtonLink";
import { Instagram } from "lucide-react";

import imgLogo from "/public/bg-fundo.png";
import imgLogoInsta from "/public/logo-insta.png";
import imgLogoSquare from "/public/logo.png";
import imgPizzaPremium from "/public/pizza-doce.png";
import imgPizzaDoce from "/public/pizza-premium.png";
import imgPizzaSimples from "/public/pizza-simple.png";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <div className="flex h-[90vh] w-full flex-col">
        <div className="h-[92vh] w-[100%] bg-black opacity-70 md:h-[100vh]">
          <Image
            src={imgLogo}
            className="h-full object-cover object-right-top md:w-full md:object-center"
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

          <div className="mt-16">
            <ButtonCTA />
          </div>
        </div>
      </div>
      <div className=" flex h-full max-h-[80rem] w-full flex-col items-center bg-zinc-300">
        <div className="mt-3 flex h-[60rem] w-[92vw] flex-col items-center md:h-[58rem]  md:w-[85vw] md:justify-center md:pt-12">
          <div className="my-16 text-4xl font-semibold text-zinc-500 md:text-5xl">
            CARDÁPIO
            <div className="ml-2 mt-[5px] h-[4px] w-32 bg-red-600" />
          </div>

          <div className="grid h-[45rem] max-h-[32rem] w-[80vw] grid-flow-row justify-center gap-3 md:w-[60rem] md:grid-flow-col md:grid-cols-3 ">
            <div className="relative w-full rounded-2xl shadow-sm shadow-slate-600 hover:shadow-md md:w-72">
              <Image
                src={imgPizzaSimples}
                className="h-full  w-full rounded-2xl object-cover object-center hover:w-[100%]  md:w-72"
                alt="Logo Empresa"
                width={200}
                height={400}
                quality={100}
              />
              <div className="mono absolute bottom-0 flex h-52 w-full items-end justify-center rounded-b-2xl bg-gradient-to-t from-zinc-800 pb-6 text-3xl font-semibold text-gray-400 duration-300 ease-in-out hover:h-full hover:from-zinc-950  hover:text-4xl">
                <span className="">Simples</span>
              </div>
            </div>

            <div className="relative w-full rounded-2xl shadow-sm shadow-slate-600 hover:shadow-md md:w-72">
              <Image
                src={imgPizzaDoce}
                className="h-full  w-full rounded-2xl object-cover object-center hover:w-[100%]  md:w-72"
                alt="Logo Empresa"
                width={200}
                height={400}
                quality={100}
              />
              <div className="mono absolute bottom-0 flex h-52 w-full items-end justify-center rounded-b-2xl bg-gradient-to-t from-zinc-800 pb-6 text-3xl font-semibold text-gray-400 duration-300 ease-in-out hover:h-full  hover:from-zinc-950 hover:text-4xl">
                <span className="">Premium</span>
              </div>
            </div>

            <div className="relative w-full rounded-2xl shadow-sm shadow-slate-600 hover:shadow-md md:w-72">
              <Image
                src={imgPizzaPremium}
                className="h-full  w-full rounded-2xl object-cover object-center hover:w-[100%]  md:w-72"
                alt="Logo Empresa"
                width={200}
                height={400}
                quality={100}
              />
              <div className="mono absolute bottom-0 flex h-52 w-full items-end justify-center rounded-b-2xl bg-gradient-to-t from-zinc-800 pb-6 text-3xl font-semibold text-gray-400 duration-300 ease-in-out hover:h-full hover:from-zinc-950  hover:text-4xl">
                <span className="">Doces</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[5rem] w-full justify-center md:h-[8rem] ">
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
