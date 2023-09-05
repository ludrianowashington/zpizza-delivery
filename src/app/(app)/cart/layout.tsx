import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 scroll-m-0 flex-col bg-zinc-800 bg-scroll">
      {children}
    </div>
  );
}
