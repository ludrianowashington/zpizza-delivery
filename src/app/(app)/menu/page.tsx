import { CardProduct } from "@/components/partials/CardProduct";
import { pizzas } from "@/utils/data";

export default function Menu() {
  return (
    <div className="flex w-full flex-initial flex-col items-center">
      <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-[110rem] lg:grid-cols-3 2xl:grid-cols-4">
        {pizzas.map(pizza => (
          <CardProduct data={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}
