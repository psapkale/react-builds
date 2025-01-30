import { useEffect, useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroProducts from "../components/HeroProducts";
import ImageCarousel from "../components/ImageCarousel";
import { p } from "../../utils";

const Home = () => {
   const [products, setProducts] = useState(p);
   const [loading, setLoading] = useState(false);

   const handleClearFilters = () => {
      setProducts(p);
   };

   useEffect(() => {
      setLoading(true);
      (async function () {
         // const res = await axios.get(
         //    "https://real-time-amazon-data.p.rapidapi.com/products-by-category",
         //    {
         //       headers: {
         //          "x-rapidapi-key": import.meta.env.VITE_RAPID_APIKEY,
         //          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
         //       },
         //    }
         // );
         // console.log(res.data);
         setLoading(false);
      })();
   }, []);

   return (
      <div>
         <ImageCarousel />
         <HeroProducts />
         <FeaturedProducts
            forHomePage
            loading={loading}
            products={products}
            handleClearFilters={handleClearFilters}
         />
      </div>
   );
};

export default Home;
