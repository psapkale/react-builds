/* eslint-disable react/prop-types */
import { Star } from "lucide-react";
import { useState } from "react";
import { addItem } from "../slices/CartSlice";
import { useDispatch } from "react-redux";
import GeminiModal from "./GeminiModal";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-toastify";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_APIKEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const ProductCard = ({ product }) => {
   const prompt = `You are a product description expert tasked with creating a compelling and informative description for the following product based on the provided JSON data. The description should highlight key features, benefits, and reasons why this product is a great deal. Use the JSON data below to craft a medium-length description that includes:
   - Product Information: Briefly describe the product and its purpose.
   - Usage: Explain where and how the product can be used.
   - Why It’s the Best Deal: Highlight pricing, discounts, and any special offers.
   - Additional Perks: Mention Prime eligibility, Amazon Choice status, delivery options, and sales volume.
   - Call to Action: Encourage the user to consider purchasing the product.
   
   Here is the JSON data for the product in JSON.stringify() format:
   ${JSON.stringify(product)}

   Instructions for the Description:
   - Use a professional yet engaging tone.
   - Ensure the description is concise but covers all key points.
   - Include a subtle call to action at the end.
   - Avoid exaggeration and stick to the facts provided in the JSON data.
   `;
   const [productSummary, setProductSummary] = useState(product.product_title);
   const [loading, setLoading] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const dispatch = useDispatch();
   const slicedTitle =
      product.product_title.length < 40
         ? product.product_title
         : product.product_title.slice(0, 40) + "...";
   const slicedDeliveryStatus =
      product?.delivery?.length < 40
         ? product.delivery
         : product.delivery?.slice(0, 40) + "...";

   const handleAddToCart = () => {
      dispatch(addItem(product));
      toast.success("Product added to cart");
   };

   const handleGeminiResponse = async () => {
      setIsOpen(true);
      setLoading(true);
      const result = await model.generateContent(prompt);

      if (!result) {
         toast.error("Error generating the summary");
         setLoading(false);
         setIsOpen(false);
         return;
      }

      setProductSummary(result.response.text());
      setLoading(false);
   };

   return (
      <>
         <GeminiModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            productSummary={productSummary}
            product_title={product.product_title}
            loading={loading}
         />

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
                  <button
                     className="text-white bg-orange-400 rounded-3xl py-1 px-4 cursor-pointer"
                     onClick={handleAddToCart}
                  >
                     Add to cart
                  </button>
                  {/* TODO add Gemini product summary */}
                  <button
                     className="text-white geminiBtn rounded-3xl py-1 px-4 transition duration-300 cursor-pointer"
                     onClick={handleGeminiResponse}
                  >
                     Product summary
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductCard;
