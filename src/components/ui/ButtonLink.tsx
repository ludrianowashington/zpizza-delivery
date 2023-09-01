import { ReactNode } from "react";

import Link from "next/link";

interface IButtonLink {
  navigateTo: string;
  text: string;
  children?: ReactNode;
}

export function ButtonLink({ children, navigateTo, text }: IButtonLink) {
  return (
    <Link
      className="flex h-full max-w-xs flex-wrap items-center px-3 hover:bg-red-600"
      href={navigateTo}
    >
      {children}
      <span className="flex max-w-[9rem] flex-wrap">{text}</span>
    </Link>
  );
}
