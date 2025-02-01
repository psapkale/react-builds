import { useEffect, useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroProducts from "../components/HeroProducts";
import ImageCarousel from "../components/ImageCarousel";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false);

   const handleClearFilters = () => {
      fetchProducts();
   };

   const fetchProducts = async () => {
      setLoading(true);

      try {
         const res = await axios.get(
            "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=172282&page=1",
            {
               headers: {
                  "x-rapidapi-key": import.meta.env.VITE_RAPID_APIKEY,
                  "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
               },
            }
         );

         setProducts(res.data.data.products);
         setLoading(false);
      } catch (error) {
         console.error(error);
         toast.error("Error fetching products");
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchProducts();
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
