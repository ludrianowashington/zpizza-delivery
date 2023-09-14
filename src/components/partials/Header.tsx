"use client";

import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { useWindowDimensions } from "@/hooks/useWindowDimension";
import { Menu, ShoppingCartIcon } from "lucide-react";

import bgImageLogo from "../../../public/logo.png";

export function Header() {
  const { width } = useWindowDimensions();

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full flex-row bg-zinc-900 pr-6 md:h-[5rem]">
      <div className="flex h-full w-full  justify-around  text-white md:w-[32vw]">
        <div className="flex h-full items-center justify-center md:hidden">
          <button className="flex h-10 w-10 items-center justify-center rounded-md duration-500 ease-in-out hover:bg-zinc-700 active:bg-zinc-700">
            <Menu className="h-5" />
          </button>
        </div>
        <div className="flex h-full w-[32vw] items-center justify-center md:w-52">
          <Image
            className=" object-cover object-center"
            src={bgImageLogo}
            height={width > 860 ? 85 : 80}
            alt="Logo da Pizzaria"
          />
        </div>
        <div className="flex h-full items-center justify-center md:hidden">
          <button className="flex h-10 w-10 items-center justify-center rounded-md duration-500 ease-in-out hover:bg-zinc-700 active:bg-zinc-700">
            <ShoppingCartIcon className="h-5" />
          </button>
        </div>
      </div>
      <div className="hidden h-full w-full items-center justify-center text-white md:flex ">
        <nav className="hidden h-full w-full items-center justify-center md:flex md:max-w-sm">
          <ButtonLink text="Início" navigateTo="/" />
          <ButtonLink text="Cardápio" navigateTo="/menu" />
          {/* <ButtonLink text="Promoções" navigateTo="/" /> */}
        </nav>
        <div className="hidden h-full w-full items-center justify-center md:flex md:max-w-[15vw] ">
          {/* <ButtonCall text="Entrar ou Cadastrar-se" navigateTo="/signin">
            <LogIn className="w10 h-10" />
          </ButtonCall> */}
        </div>
      </div>
      <div className="hidden h-full w-full items-center text-white md:flex md:max-w-[10vw]">
        <ButtonLink text="Carrinho" navigateTo="/">
          <ShoppingCartIcon className="w-12" />
        </ButtonLink>
      </div>
    </header>
  );
}
