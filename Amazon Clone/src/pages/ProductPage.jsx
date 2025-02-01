import { Star, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeminiModal from "../components/GeminiModal";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/CartSlice";
import { toast } from "react-toastify";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { useLocalUser } from "../hooks/useLocalUser";

const ProductPage = () => {
   const { getLocalUser } = useLocalUser();
   const userData = getLocalUser();
   const [product, setProduct] = useState();
   const [loading, setLoading] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const { asin } = useParams();
   const [currImage, setCurrImage] = useState();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleAddToCart = (e) => {
      e.stopPropagation();

      dispatch(addItem(product));
      toast.success("Product added to cart");
   };

   const handleGeminiResponse = () => {
      setIsOpen(true);
   };

   const fetchProduct = async () => {
      setLoading(true);
      try {
         const res = await axios.get(
            `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}`,
            {
               headers: {
                  "x-rapidapi-key": import.meta.env.VITE_RAPID_APIKEY,
                  "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
               },
            }
         );

         setProduct(res.data.data);
         setCurrImage(res.data.data.product_photo);
         setLoading(false);
      } catch (error) {
         console.error(error);
         toast.error("Error fetching product details");
         setLoading(false);
         navigate("/");
      }
   };

   const customPrice = (price) => {
      return price?.charAt(0) === "$" ? price : "$" + price;
   };

   useEffect(() => {
      fetchProduct();
   }, []);

   if (!userData) {
      toast.error("Not authenticated");
      navigate("/login");
      return;
   }

   return (
      <>
         {product && (
            <GeminiModal
               product={product}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
            />
         )}

         {loading ? (
            <div className="w-[100vw]">
               <Skeleton className="w-[80px] mx-auto h-[150px]" />
               <Skeleton className="w-[80px] mx-auto h-[150px]" />
               <Skeleton className="w-[80px] mx-auto h-[150px]" />
               <Skeleton className="w-[80px] mx-auto h-[150px]" />
            </div>
         ) : (
            <div className="w-screen flex items-start justify-between bg-white py-4">
               <div className="w-[40%] flex items-start gap-2">
                  <div className="w-[16%] flex items-center gap-2 flex-col">
                     {product?.product_photos?.map((photo) => (
                        <img
                           key={photo}
                           src={photo}
                           alt={product?.product_title?.slice(0, 10) + "..."}
                           className="w-[70%] h-16 object-cover border border-slate-400 p-1 rounded-sm cursor-pointer"
                           onClick={() => setCurrImage(photo)}
                        />
                     ))}
                  </div>
                  <div className="relative w-[82%] p-6">
                     <img
                        src={currImage}
                        alt={product?.product_title?.slice(0, 10) + "..."}
                        className="w-full h-[500px] object-contain"
                     />
                     <Upload className="absolute top-1 right-1 cursor-pointer" />
                  </div>
               </div>

               <div className="w-[40%] py-2 px-4 flex gap-2 flex-col">
                  <h1 className="text-3xl">{product?.product_title}.</h1>
                  <span className="text-slate-600 text-sm underline">
                     {product?.product_byline}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                     <span>{product?.product_star_rating}</span>
                     <span className="flex">
                        {Array(5)
                           .fill("")
                           .map((_, i) => (
                              <Star
                                 key={i}
                                 className={`text-yellow-500 ${
                                    i <
                                    parseFloat(product?.product_star_rating) - 1
                                       ? "fill-yellow-500"
                                       : ""
                                 } w-4`}
                              />
                           ))}
                     </span>
                     <span className="pl-1">
                        {product?.product_num_ratings} ratings
                     </span>
                  </div>
                  <div className="text-slate-900 font-semibold">
                     {product?.sales_volume}
                  </div>
                  {product?.is_amazon_choice && (
                     <span className="w-fit text-white py-1 px-2 text-sm bg-[#002f36]">
                        Amazon&apos;s{" "}
                        <span className="text-[#ce8c31]">Choise</span>
                     </span>
                  )}

                  <hr className="text-slate-200" />

                  <div className="flex items-center gap-1">
                     <span className="text-2xl font-semibold">
                        {customPrice(product?.product_price)}
                     </span>
                     {product?.product_price !==
                        product?.product_original_price && (
                        <span className="line-through text-lg font-semibold">
                           {customPrice(product?.product_original_price)}
                        </span>
                     )}
                  </div>
                  <div>
                     <h1>About this item:</h1>
                     <p className="text-slate-900">
                        {product?.about_product ??
                           product?.product_description ??
                           product?.product_information}
                     </p>
                  </div>
               </div>

               <div className="w-[20%] flex flex-col gap-2 px-8">
                  <button
                     className="text-white bg-orange-400 rounded-3xl py-1 px-4 cursor-pointer"
                     onClick={handleAddToCart}
                  >
                     Add to cart
                  </button>
                  <button
                     className="text-white geminiBtn rounded-3xl py-1 px-4 transition duration-300 cursor-pointer"
                     onClick={handleGeminiResponse}
                  >
                     Product summary
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default ProductPage;
