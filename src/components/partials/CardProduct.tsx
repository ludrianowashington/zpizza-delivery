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
    <div className="flex h-[30rem] w-full flex-col rounded-lg bg-muted p-3 lg:h-40 lg:flex-row">
      <div className="basis-1/2  md:basis-1/4 ">
        <Image
          className="h-[14rem] rounded-t-md object-cover lg:h-full lg:rounded-l-md"
          src={img}
          alt="foto pizza"
        />
      </div>
      <div className=" h-full basis-1/2 lg:basis-3/4">
        <div className="h-[70%] p-2 lg:h-[70%] lg:p-0">
          <h4 className="pb-1 text-lg font-semibold">{data.flavor}</h4>
          <p className="h-[50%] lg:h-[30%] lg:text-ellipsis lg:text-xs">
            {data.ingredients}
          </p>
          <p className="flex h-[25%] w-full items-center justify-end px-3 text-2xl font-bold text-red-500 lg:h-[30%]">
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
