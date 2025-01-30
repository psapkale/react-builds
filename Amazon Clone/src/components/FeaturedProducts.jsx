/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterCategories from "./FilterCategories";
import ProductCard from "./ProductCard";
import Skeleton from "react-loading-skeleton";

const FeaturedProducts = ({
   forHomePage = false,
   loading,
   products,
   handleClearFilters,
}) => {
   const [productsCopy, setProductsCopy] = useState(products);

   return (
      <div
         className={`${
            forHomePage ? "relative -top-[65vh]" : ""
         } flex bg-white min-h-screen`}
      >
         <FilterCategories
            products={products}
            setProducts={setProductsCopy}
            clearFilters={handleClearFilters}
         />
         <div className="w-[80%] pl-4 my-6">
            <h1 className="font-bold text-2xl">Results</h1>
            <span className="text-gray-800">
               Check each product page for other buying options. Price and other
               details may vary based on product size and colour.
            </span>
            <div className="w-full my-6 flex flex-wrap items-start justify-evenly gap-2">
               {loading ? (
                  <div className="w-full mx-auto flex items-center justify-evenly gap-10 flex-wrap">
                     <Skeleton width={300} height={400} />
                     <Skeleton width={300} height={400} />
                     <Skeleton width={300} height={400} />
                     <Skeleton width={300} height={400} />
                     <Skeleton width={300} height={400} />
                     <Skeleton width={300} height={400} />
                  </div>
               ) : productsCopy.length ? (
                  productsCopy.map((prod) => (
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
