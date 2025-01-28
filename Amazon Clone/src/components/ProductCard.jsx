/* eslint-disable react/prop-types */
import { Star } from "lucide-react";
import {} from "react";

const ProductCard = ({ product }) => {
   const slicedTitle =
      product.product_title.length < 40
         ? product.product_title
         : product.product_title.slice(0, 40) + "...";
   const slicedDeliveryStatus =
      product?.delivery?.length < 40
         ? product.delivery
         : product.delivery?.slice(0, 40) + "...";

   return (
      <div className="relative border border-slate-100 rounded-md group w-[250px] h-[640px] flex items-center flex-col overflow-hidden">
         <img
            src={product.product_photo}
            alt={product.product_title}
            className="w-full max-h-[400px] pb-2 cursor-pointer"
         />

         {product.is_amazon_choice && !product.is_best_seller && (
            <span className="text-white absolute top-0 left-0 py-1 px-2 text-sm bg-[#002f36]">
               Amazon&apos;s <span className="text-[#ce8c31]">Choise</span>
            </span>
         )}
         {product.is_best_seller && !product.is_amazon_choice && (
            <span className="text-white absolute -top-0 left-0 py-1 px-2 text-sm bg-orange-400">
               Best seller
            </span>
         )}
         <div className="w-full flex items-start flex-col gap-1 py-2 px-1">
            <h1 className="group-hover:underline text-lg cursor-pointer">
               {slicedTitle}
            </h1>
            <span className="flex items-center">
               {Array(5)
                  .fill("")
                  .map((_, i) => (
                     <Star
                        key={i}
                        className={`w-3 h-3 text-[#de7921] ${
                           i < product.product_star_rating - 1
                              ? "fill-[#de7921]"
                              : ""
                        }`}
                     />
                  ))}
               <span className="pl-1 text-xs font-semibold">
                  {product.product_num_ratings}
               </span>
            </span>
            <div className="text-xl font-semibold flex items-center gap-1">
               <span>{product.product_price}</span>
               {product.product_price !== product.product_original_price && (
                  <span className="line-through text-sm text-slate-700">
                     {product.product_original_price}
                  </span>
               )}
            </div>
            <span className="text-sm">{product.sales_volume}</span>
            <span className="text-xs font-semibold">
               {slicedDeliveryStatus}
            </span>
            <div className="flex flex-col gap-1">
               <button className="text-white bg-orange-400 rounded-3xl py-1 px-4 cursor-pointer">
                  Add to cart
               </button>
               {/* TODO add Gemini product summary */}
               <button className="text-white geminiBtn rounded-3xl py-1 px-4 transition duration-300 cursor-pointer">
                  Product summary
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
