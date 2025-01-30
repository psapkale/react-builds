/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FilterCategories = ({ products, setProducts, clearFilters }) => {
   const [priceFil, setPriceFil] = useState("");
   const [filter, setFilter] = useState();
   const [rating, setRating] = useState(-1);

   const handlePriceFilChange = (key) => {
      setPriceFil(key);
   };

   const handleFilterChange = (key) => {
      setFilter(key);
   };

   const handleRatingChange = (newRating) => {
      setRating(newRating);
   };

   const handleClearFilters = () => {
      setPriceFil("");
      setFilter();
      setRating(-1);
      clearFilters();
   };

   useEffect(() => {
      if (priceFil === ">150") {
         const newProducts = products.filter((prod) => {
            const productPriceToNumber = parseFloat(
               prod.product_price.slice(1)
            );

            return productPriceToNumber > 150;
         });

         setProducts(newProducts);
         return;
      }

      const splittedPriceFil = priceFil.split("-");
      const lowerLimit = parseFloat(splittedPriceFil[0]);
      const upperLimit = parseFloat(splittedPriceFil[1]);

      const newProducts = products.filter((prod) => {
         const productPriceToNumber = parseFloat(prod.product_price.slice(1));

         return (
            lowerLimit < productPriceToNumber &&
            productPriceToNumber < upperLimit
         );
      });

      setProducts(newProducts);
   }, [products, priceFil]);

   useEffect(() => {
      const isLowToHigh = filter === "low-to-high";

      const newProducts = products.sort((a, b) => {
         const productPriceToNumberFirst = parseFloat(a.product_price.slice(1));
         const productPriceToNumberSecond = parseFloat(
            b.product_price.slice(1)
         );

         return isLowToHigh
            ? productPriceToNumberFirst - productPriceToNumberSecond
            : productPriceToNumberSecond - productPriceToNumberFirst;
      });

      setProducts(newProducts);
   }, [products, filter]);

   useEffect(() => {
      if (rating === 5) {
         const newProducts = products.filter((prod) => {
            const productRatingToNumber = parseFloat(prod.product_star_rating);

            return productRatingToNumber <= 5;
         });

         setProducts(newProducts);
         return;
      }

      if (rating === -1) {
         return;
      }

      const newProducts = products.filter((prod) => {
         const productRatingToNumber = parseFloat(prod.product_star_rating);

         return productRatingToNumber < rating;
      });

      setProducts(newProducts);
   }, [products, rating]);

   return (
      <div className="w-[20%] my-6 px-4 border-r border-slate-100 flex gap-2 flex-col">
         {/* Price */}
         <div className="flex gap-2 flex-col">
            <h1 className="text-lg font-bold">Price</h1>
            <div>
               <span className="flex gap-1">
                  <input
                     type="checkbox"
                     value="0-49"
                     onChange={() => handlePriceFilChange("0-49")}
                     checked={priceFil === "0-49"}
                  />
                  <label htmlFor="">$0 - $49</label>
               </span>
               <span className="flex gap-1">
                  <input
                     type="checkbox"
                     value="50-99"
                     onChange={() => handlePriceFilChange("50-99")}
                     checked={priceFil === "50-99"}
                  />
                  <label htmlFor="">$50 - $99</label>
               </span>
               <span className="flex gap-1">
                  <input
                     type="checkbox"
                     value="100-149"
                     onChange={() => handlePriceFilChange("100-149")}
                     checked={priceFil === "100-149"}
                  />
                  <label htmlFor="">$100 - $149</label>
               </span>
               <span className="flex gap-1">
                  <input
                     type="checkbox"
                     value=">150"
                     onChange={() => handlePriceFilChange(">150")}
                     checked={priceFil === ">150"}
                  />
                  <label htmlFor="">More than $150</label>
               </span>
            </div>
         </div>

         {/* Filter */}
         <div>
            <h1 className="text-lg font-bold">Filter</h1>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value="low-to-high"
                  onChange={() => handleFilterChange("low-to-high")}
                  checked={filter === "low-to-high"}
               />
               <label htmlFor="">Low to high</label>
            </span>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value="high-to-low"
                  onChange={() => handleFilterChange("high-to-low")}
                  checked={filter === "high-to-low"}
               />
               <label htmlFor="">High to low</label>
            </span>
         </div>

         {/* Rating */}
         <div>
            <h1 className="text-lg font-bold">Rating</h1>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value={0}
                  onChange={() => handleRatingChange(0)}
                  checked={rating === 0}
               />
               <label htmlFor="">Less than 0</label>
            </span>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value={1}
                  onChange={() => handleRatingChange(1)}
                  checked={rating === 1}
               />
               <label htmlFor="">Less than 1</label>
            </span>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value={2}
                  onChange={() => handleRatingChange(2)}
                  checked={rating === 2}
               />
               <label htmlFor="">Less than 2</label>
            </span>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value={3}
                  onChange={() => handleRatingChange(3)}
                  checked={rating === 3}
               />
               <label htmlFor="">Less than 3</label>
            </span>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value={4}
                  onChange={() => handleRatingChange(4)}
                  checked={rating === 4}
               />
               <label htmlFor="">Less than 4</label>
            </span>
            <span className="flex gap-1">
               <input
                  type="checkbox"
                  value={5}
                  onChange={() => handleRatingChange(5)}
                  checked={rating === 5}
               />
               <label htmlFor="">Higher ratings</label>
            </span>
         </div>

         {/* clear filters */}
         <button
            className="border border-slate-400 mt-2 p-1 rounded-full cursor-pointer"
            onClick={handleClearFilters}
         >
            Clear filters
         </button>
      </div>
   );
};

export default FilterCategories;
