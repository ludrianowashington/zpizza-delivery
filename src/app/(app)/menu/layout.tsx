interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className=" h-full w-full bg-zinc-500">
      {/* <div className="relative h-[90vh] w-full rounded-lg md:h-64 md:w-[95vw]">
        <Image
          src={imgFundo}
          className="h-full rounded-lg object-cover object-center md:w-full"
          alt="Fundo Parede Preta"
          quality={100}
        />
      </div> */}
      <div className={`hidden flex-col p-5`}>
        <div className="flex w-[90vw] touch-pan-x snap-x scroll-pl-3 flex-nowrap space-x-3 overflow-x-auto overscroll-contain md:w-[100%] ">
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
          <div className="h-32 w-56 flex-none snap-start rounded-md bg-slate-600"></div>
        </div>
      </div>
      <div className="flex h-full flex-1 p-4">{children}</div>
    </div>
  );
}
