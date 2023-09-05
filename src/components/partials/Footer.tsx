import Link from "next/link";

export function Footer() {
  return (
    <footer className="mono flex h-[6rem] flex-col items-center justify-between bg-red-600 px-4 py-5 font-medium text-white md:flex-row md:justify-between">
      <div className="text-xs">
        ZPizza @2023 - Todos os direitos reservados{" "}
      </div>
      <div className="text-xs">
        {/* Desenvolvido por{" "}
        <Link
          className="font-semibold"
          href="http://ludrianowashington.vercel.io"
        >
          Ludriano Washington
        </Link> */}
      </div>
    </footer>
  );
}
