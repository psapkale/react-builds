import { useEffect, useState } from "react";

const Pagination = () => {
   const [products, setProducts] = useState([]);
   const [index, setIndex] = useState(0);
   const offset = 4;

   const fetchData = async () => {
      fetch("https://dummyjson.com/products?limit=100")
         .then((res) => res.json())
         .then((res) => {
            console.log(res);
            setProducts(res.products);
         });
   };

   const changePage = (i) => {
      setIndex(i);
   };

   const handlePrev = () => {
      if (index === 0) {
         return;
      }

      setIndex((p) => p - 1);
   };

   const handleNext = () => {
      if (index === products.length - 1) {
         return;
      }

      setIndex((p) => p + 1);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div>
         Pagination
         <div className="w-[80vw] mx-auto">
            {products
               .slice(index * offset, index * offset + offset)
               .map((product) => (
                  <div key={product.id}>
                     <h1 className="text-lg">{product.title}</h1>
                     <h2 className="text-slate-600">{product.description}</h2>
                  </div>
               ))}
         </div>
         <div className="flex items-center justify-center gap-1 mt-1">
            <button
               disabled={index === 0}
               onClick={handlePrev}
               className="border border-black px-1 rounded-lg cursor-pointer disabled:border-none disabled:cursor-not-allowed"
            >
               Prev
            </button>
            {Array(products.length / offset)
               .fill("")
               .map((_, i) => (
                  <button
                     key={i}
                     disabled={i === index}
                     onClick={() => changePage(i)}
                     className="border border-black px-1 rounded-lg cursor-pointer disabled:border-none disabled:cursor-not-allowed"
                  >
                     {i + 1}
                  </button>
               ))}
            <button
               disabled={index === products.length / offset - 1}
               onClick={handleNext}
               className="border border-black px-1 rounded-lg cursor-pointer disabled:border-none disabled:cursor-not-allowed"
            >
               Next
            </button>
         </div>
      </div>
   );
};

export default Pagination;
