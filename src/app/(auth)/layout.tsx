import { ReactNode } from "react";

interface ILayoutAuth {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutAuth) {
  return (
    <div>
      <span>Layout Auth</span>
      {children}
    </div>
  );
}
