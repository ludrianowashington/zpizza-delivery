import { ReactNode } from "react";

import Link from "next/link";

interface IButtonLink {
  navigateTo: string;
  text?: string;
  children?: ReactNode;
}

interface IButtonCTA extends IButtonLink {
  cta?: string;
}

export function ButtonLink({ children, navigateTo, text }: IButtonLink) {
  return (
    <Link
      className="flex h-full max-w-xs flex-wrap items-center px-5 duration-500 ease-in-out hover:bg-red-600"
      href={navigateTo}
    >
      {children && children}
      <span className="flex max-w-[9rem] flex-wrap">{text}</span>
    </Link>
  );
}

export function ButtonCTA({ children, navigateTo, text }: IButtonCTA) {
  return (
    <Link
      className="flex h-full max-w-sm flex-row items-center bg-red-700  px-2 hover:bg-red-800 lg:px-4"
      href={navigateTo}
    >
      {children && <div>{children}</div>}
      <span className="ml-[6px] flex max-w-[9rem] flex-wrap text-xs font-bold lg:ml-4 lg:text-base">
        {text}
      </span>
    </Link>
  );
}
