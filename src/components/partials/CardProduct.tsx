"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import img from "/public/pizza-simple.png";

type ProductProps = {
  id: number;
  flavor: string;
  ingredients: string;
  price: number;
};

interface ICardProduct {
  data: ProductProps;
}

export function CardProduct({ data }: ICardProduct) {
  return (
    <div className="flex h-[27rem] w-full flex-col rounded-lg bg-muted p-2 lg:h-40 lg:flex-row">
      <div className="basis-1/2  md:basis-1/3 ">
        {data ? (
          <Image
            className="h-[14rem] rounded-t-md object-cover lg:h-full lg:rounded-l-md"
            src={img}
            alt="foto pizza"
          />
        ) : (
          <div className="h-[14rem] rounded-t-md bg-slate-600 lg:h-full lg:rounded-l-md"></div>
        )}
      </div>
      <div className=" h-full basis-1/2 lg:basis-2/3">
        <div className="h-[69%] p-2 lg:h-[68%] lg:py-0">
          <h4 className="pb-2 text-2xl font-semibold lg:truncate lg:pb-0 lg:text-lg">
            {data.flavor}
          </h4>
          <p className="line-clamp-2 h-auto w-full max-w-[90%] overflow-hidden truncate whitespace-pre-line md:line-clamp-1 lg:line-clamp-2 lg:text-xs">
            {data.ingredients}
          </p>
          <p className="flex h-[3rem] w-full items-center justify-end px-3 text-2xl font-bold text-red-500 md:text-lg">
            R$ {data.price}
          </p>
        </div>
        <div className="flex h-[25%] w-full items-center justify-end space-x-4 px-3 lg:h-[30%]">
          <Button variant={"ghost"}>Detalhes</Button>
          <Button variant={"default"}>+ Adicionar</Button>
        </div>
      </div>
    </div>
  );
}
