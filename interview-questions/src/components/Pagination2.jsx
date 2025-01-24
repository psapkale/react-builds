import { useEffect, useState } from "react";

const Pagination2 = () => {
   const [products, setProducts] = useState([]);
   const [page, setPage] = useState(0);
   const offset = 4;

   const getData = async () => {
      fetch(
         `https://dummyjson.com/products?limit=${offset}&skip=${page * offset}`
      )
         .then((res) => res.json())
         .then((res) => setProducts(res.products));
   };

   const handlePrev = () => {
      if (page === 0) {
         return;
      }

      setPage((p) => p - 1);
   };

   const handleNext = () => {
      if (products.length < offset) {
         return;
      }

      setPage((p) => p + 1);
   };

   useEffect(() => {
      getData();
   }, [page]);

   return (
      <div>
         Pagination2
         <div className="w-[80vw] mx-auto">
            {products.map((product) => (
               <div key={product.id}>
                  <h1 className="text-lg">{product.title}</h1>
                  <h2 className="text-slate-600">{product.description}</h2>
               </div>
            ))}
         </div>
         <div className="flex items-center justify-center gap-1 mt-1">
            <button
               disabled={page === 0}
               onClick={handlePrev}
               className="border border-black px-1 rounded-lg cursor-pointer disabled:border-none disabled:cursor-not-allowed"
            >
               Prev
            </button>
            <button
               disabled={products.length < offset}
               onClick={handleNext}
               className="border border-black px-1 rounded-lg cursor-pointer disabled:border-none disabled:cursor-not-allowed"
            >
               Next
            </button>
         </div>
      </div>
   );
};

export default Pagination2;
