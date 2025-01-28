import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
   const { productId } = useParams();

   return <div>ProductPage</div>;
};

export default ProductPage;
