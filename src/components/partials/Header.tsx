"use client";

import Image from "next/image";
import Link from "next/link";

import { ButtonCart, ButtonLink } from "@/components/ui/ButtonLink";
import { Input } from "@/components/ui/input";
import { useWindowDimensions } from "@/hooks/useWindowDimension";
import { Home, MenuSquare, UserCircle2Icon } from "lucide-react";

import bgImageLogo from "/public/logoz.png";

export function Header() {
  const { width } = useWindowDimensions();

  return (
    <header className="sticky z-50 flex flex-col items-center bg-muted p-3 ">
      <div className="flex h-[4.5rem] w-full max-w-[90rem] items-center justify-between space-x-3 pb-2">
        <Link href="/" className="h-12 w-[20%]">
          <Image className="h-20" src={bgImageLogo} alt="logo image" />
        </Link>
        <div className="flex h-full justify-end space-x-8">
          <div className="">
            <ButtonLink navigateTo="/" text="Inicio">
              <Home size={30} className="text-red-600" />
            </ButtonLink>
            <ButtonLink navigateTo="/menu" text="Cardápio">
              <MenuSquare size={30} className="text-red-600" />
            </ButtonLink>
          </div>
          <div className="">
            <ButtonLink navigateTo="/" text="Meu Perfil">
              <UserCircle2Icon size={30} />
            </ButtonLink>
          </div>
          <ButtonCart />
        </div>
      </div>
      <div className=" flex w-full max-w-[90rem] ">
        <div className="ml-8 mt-4 flex h-14 w-full items-end justify-center px-5">
          <Input
            className="border-0 bg-zinc-700"
            placeholder="Digite o que deseja..."
          />
        </div>
      </div>
    </header>
  );
}
