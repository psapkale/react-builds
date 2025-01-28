import {} from "react";
import { p } from "../../utils";
import HeroProductCard from "./HeroProductCard";

const HeroProducts = () => {
   return (
      <div className="relative -top-[80vh] flex flex-col gap-10">
         <h1 className="pl-10 text-2xl font-bold text-white">
            Featured Products
         </h1>
         <div className="flex items-center justify-center gap-5">
            {p.slice(0, 6).map((prod) => (
               <HeroProductCard key={prod.asin} product={prod} />
            ))}
         </div>
      </div>
   );
};

export default HeroProducts;
