import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";

const Checkout = () => {
   const cartItems = useSelector((s) => s.cart.cart);
   const subTotal = cartItems.reduce((acc, item) => {
      const priceIntoNumber = parseFloat(item.product_price.slice(1));

      return acc + priceIntoNumber * item.quantity;
   }, 0);

   return (
      <div>
         {/* cta one click */}
         <div className="w-fit py-3 border border-slate-200 px-4 bg-white mx-auto flex items-center gap-4 my-4">
            <img
               src="https://m.media-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/2024/July_2024/Maple_icon-APL_03._CB568609327_.png"
               alt="payImg"
               className="w-24"
            />
            <span className="text-sm">
               Now, continue to{" "}
               <span className="font-bold">buy more & pay in 1-click</span> with
               Amazon Pay Later.
            </span>
         </div>

         {/* cart */}
         <div className="flex items-start justify-evenly">
            {/* Shopping cart */}
            <div className="bg-white w-[80%] p-4 flex gap-6 flex-col">
               <h1 className="text-4xl">Shopping Cart</h1>
               {cartItems.length ? (
                  <div className="flex gap-2 flex-col">
                     {cartItems.map((item) => (
                        <CartProductCard key={item.asin} product={item} />
                     ))}
                  </div>
               ) : (
                  <div className="flex items-start gap-4 mt-6 px-4">
                     <img
                        src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                        alt="empty"
                        className="w-[300px]"
                     />
                     <div>
                        <h1 className="text-xl font-semibold">
                           Your Amazon Cart is Empty
                        </h1>
                        <Link to={"/"} className="text-blue-400 text-sm">
                           Shop today&apos;s deal
                        </Link>
                     </div>
                  </div>
               )}
            </div>

            {/* Checkout summary */}
            <div className="bg-white w-[18%] p-4 flex items-center gap-3 flex-col">
               <h1 className="text-lg">
                  Subtotal ({cartItems.length} items) :{" "}
                  <span className="font-semibold">${subTotal}</span>
               </h1>
               <button className="w-[90%] bg-yellow-400 py-1 px-4 rounded-full cursor-pointer">
                  Proceed to buy
               </button>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
