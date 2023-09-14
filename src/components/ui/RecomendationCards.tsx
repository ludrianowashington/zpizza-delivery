import Image, { StaticImageData } from "next/image";

type RecomendationCardProps = {
  imageData: StaticImageData;
  altName: string;
  typeName: string;
};

export function RecomendationCard({
  imageData,
  altName,
  typeName,
}: RecomendationCardProps) {
  return (
    <div className="relative h-[40vh] w-64 flex-none snap-center rounded-2xl shadow-sm shadow-slate-600 duration-300 ease-in-out hover:shadow-md hover:shadow-slate-700 md:h-[65vh] ">
      <Image
        src={imageData}
        className="h-[40vh] w-64 rounded-2xl object-cover object-center hover:w-[100%] md:h-[65vh] "
        alt={altName}
        width={200}
        height={400}
        quality={100}
      />

      <div className="mono absolute bottom-0 flex h-52 w-full items-end justify-center rounded-b-2xl bg-gradient-to-t from-zinc-800 pb-6 text-3xl font-semibold text-gray-400 duration-500 ease-in-out hover:h-full hover:from-zinc-950  hover:text-4xl">
        <span className="">{typeName}</span>
      </div>
    </div>
  );
}
