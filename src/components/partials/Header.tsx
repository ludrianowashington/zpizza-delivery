"use client";

import Image from "next/image";

import { ButtonCTA, ButtonLink } from "@/components/ui/ButtonLink";
import { useWindowDimensions } from "@/hooks/useWindowDimension";
import { LogIn, Menu, ShoppingCartIcon } from "lucide-react";

import bgImageLogo from "../../../public/logo.png";

export function Header() {
  const { width } = useWindowDimensions();

  return (
    <header className="flex h-16 w-full flex-row bg-zinc-900 md:h-[5rem]">
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
          <ButtonLink text="Cardápio" navigateTo="/" />
          <ButtonLink text="Promoções" navigateTo="/" />
        </nav>
        <div className="hidden h-full w-full items-center justify-center md:flex md:max-w-[15vw] ">
          <ButtonCTA text="Entrar ou Cadastrar-se" navigateTo="/signin">
            <LogIn className="w10 h-10" />
          </ButtonCTA>
        </div>
      </div>
      <div className="hidden h-full w-full items-center text-white md:flex md:max-w-[10vw]">
        <ButtonLink navigateTo="/">
          <ShoppingCartIcon className="w10 h-10" />
        </ButtonLink>
      </div>

      {/* <div className="flex h-full w-auto min-w-[12rem] items-center  bg-fuchsia-300 md:max-w-xs">
        <div className="md:hidden">
          <button>
            <MenuIcon className="text-white" size={40} />
          </button>
        </div>
        <div className="flex h-max w-[32vw] justify-center ">
          <Image
            className="hidden object-cover object-center md:flex"
            src={bgImageLogoH}
            height={28}
            alt="Logo da Pizzaria"
          />
          <Image
            className="flex object-cover object-center md:hidden"
            src={bgImageLogo}
            height={48}
            alt="Logo da Pizzaria"
          />
        </div>
      </div>

      <nav className="hidden h-full w-full items-center justify-center md:flex md:max-w-sm md:bg-slate-300">
        <ButtonLink text="Início" navigateTo="" />
        <ButtonLink text="Cardápio" navigateTo="" />
        <ButtonLink
          text="Promoções de todos os meses a cada ano"
          navigateTo=""
        />
      </nav>

      <div className="flex min-w-[3rem] md:h-full md:items-center">
        <Link href="" className="flex h-full w-full justify-center md:flex-col">
          <User className="text-white" />
          <div className="hidden text-white md:flex md:flex-col">
            <span>Fazer login ou</span>
            <span>Cadastrar-se</span>
          </div>
        </Link>
        <div className="hidden flex-col md:flex">
          <ShoppingCart />
          <span className="">Carrinho</span>
        </div>
      </div> */}
    </header>
  );
}
