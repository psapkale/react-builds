import { useEffect, useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SearchResults = () => {
   const [products, setProducts] = useState([]);
   const { query } = useParams();
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   const fetchProducts = async () => {
      setLoading(true);
      try {
         const response = await axios.get(
            `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&sort_by=RELEVANCE`,
            {
               headers: {
                  "x-rapidapi-key": import.meta.env.VITE_RAPID_APIKEY,
                  "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
               },
            }
         );

         setProducts(response.data?.data?.products);
         setLoading(false);
      } catch (error) {
         console.error(error);
         toast.error("Error fetching products");
         navigate("/");
         setLoading(false);
      }
   };

   const handleClearFilters = () => {
      fetchProducts();
   };

   useEffect(() => {
      fetchProducts();
   }, []);

   return (
      <div>
         <FeaturedProducts
            loading={loading}
            products={products}
            handleClearFilters={handleClearFilters}
         />
      </div>
   );
};

export default SearchResults;
