import { ReactNode } from "react";

import Link from "next/link";

interface ILayoutLogin {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutLogin) {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/">Home</Link>
      {children}
    </div>
  );
}
