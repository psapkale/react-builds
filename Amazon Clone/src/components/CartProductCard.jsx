/* eslint-disable react/prop-types */
import { Minus, Plus, Trash } from "lucide-react";
import {} from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../slices/CartSlice";
import { toast } from "react-toastify";

const CartProductCard = ({ product }) => {
   const dispatch = useDispatch();
   const priceToNumber = parseFloat(product.product_price.slice(1));
   const itemTotal = product.quantity * priceToNumber;

   const handleIncreaseQuantity = () => {
      dispatch(updateQuantity({ asin: product.asin, operation: "INCREMENT" }));
      toast.success("Quantity increased");
   };

   const handleDecreaseQuantity = () => {
      if (product.quantity === 1) {
         dispatch(removeItem({ asin: product.asin }));
         toast.success("Product removed from cart");
         return;
      }

      dispatch(updateQuantity({ asin: product.asin, operation: "DECREMENT" }));
      toast.success("Quantity decreased");
   };

   return (
      <div className="flex border-t border-slate-200 items-start justify-between py-4 px-10">
         <img
            src={product.product_photo}
            alt={product.product_title}
            className="w-[200px]"
         />

         <div className="w-[70%] flex items-start gap-2 flex-col p-4">
            <h1 className="text-lg font-semibold">{product.product_title}</h1>
            <span className="text-base text-slate-700">{product.delivery}</span>
            <div className="w-[80px] flex items-center justify-between gap-2 border-2 border-orange-400 rounded-full py-1 px-2 font-semibold text-sm">
               <button
                  className="cursor-pointer"
                  onClick={handleDecreaseQuantity}
               >
                  {product.quantity === 1 ? (
                     <Trash className="w-4" />
                  ) : (
                     <Minus className="w-4" />
                  )}
               </button>
               <span>{product.quantity}</span>
               <button
                  className="cursor-pointer"
                  onClick={handleIncreaseQuantity}
               >
                  <Plus className="w-4" />
               </button>
            </div>
         </div>
         <div className="flex items-end flex-col">
            <span className="text-lg font-semibold">${itemTotal}</span>
            <span className="text-sm">
               Item price:{" "}
               <span className="font-semibold">{product.product_price}</span>
            </span>
         </div>
      </div>
   );
};

export default CartProductCard;
