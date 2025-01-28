import { useEffect, useState } from "react";
import { p } from "../../utils";
import FilterCategories from "./FilterCategories";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
   const [products, setProducts] = useState(p);

   useEffect(() => {
      (async function () {
         // const res = await axios.get(
         //    "https://real-time-amazon-data.p.rapidapi.com/products-by-category",
         //    {
         //       headers: {
         //          "x-rapidapi-key": import.meta.env.VITE_RAPID_APIKEY,
         //          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
         //       },
         //    }
         // );
         // console.log(res.data);
      })();
   }, []);

   return (
      <div className="flex relative -top-[65vh] bg-white min-h-screen">
         <FilterCategories products={p} setProducts={setProducts} />
         <div className="w-[80%] pl-4 my-6">
            <h1 className="font-bold text-2xl">Results</h1>
            <span className="text-gray-800">
               Check each product page for other buying options. Price and other
               details may vary based on product size and colour.
            </span>
            <div className="w-full my-6 flex flex-wrap items-start justify-evenly gap-2">
               {products.length ? (
                  products.map((prod) => (
                     <ProductCard key={prod.asin} product={prod} />
                  ))
               ) : (
                  <div className="w-full px-2">
                     <h1 className="text-slate-700 font-semibold">
                        No products found
                     </h1>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default FeaturedProducts;
