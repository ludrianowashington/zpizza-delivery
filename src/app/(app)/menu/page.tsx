import { CardProduct } from "@/components/partials/CardProduct";
import { ScrollArea } from "@/components/ui/scroll-area";
import { pizzas } from "@/utils/data";

export default function Menu() {
  return (
    <div className="flex flex-col">
      <h3 className="p-3 text-xl font-bold text-red-600 sm:text-2xl">
        Escolha sua pizza
      </h3>
      <ScrollArea className="flex h-[70vh] w-full flex-initial flex-col items-center justify-center sm:h-[70vh] md:h-[80vh] xl:h-[70vh]">
        <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-[110rem] lg:grid-cols-3 2xl:grid-cols-4">
          {pizzas.map(pizza => (
            <CardProduct data={pizza} key={pizza.id} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
