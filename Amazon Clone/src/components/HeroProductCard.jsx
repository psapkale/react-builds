/* eslint-disable react/prop-types */
import {} from "react";
import { Link } from "react-router-dom";

const HeroProductCard = ({ product }) => {
   return (
      <Link
         to={`/p/${product.asin}`}
         className="w-[14vw] h-fit bg-white p-4 flex items-center justify-center flex-col gap-2"
      >
         <img
            src={product.product_photo}
            alt={product.product_title}
            className="w-full h-[30vh] object-contain"
         />
         <h1 className="font-bold text-sm">
            {product.product_title.length < 40
               ? product.product_title
               : product.product_title.slice(0, 40) + "..."}
         </h1>
      </Link>
   );
};

export default HeroProductCard;
