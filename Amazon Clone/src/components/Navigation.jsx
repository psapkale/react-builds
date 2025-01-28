import { MapPin, SearchIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalUser } from "../hooks/useLocalUser";
import { useSelector } from "react-redux";

const Navigation = () => {
   const cart = useSelector((store) => store.cart.cart);
   const { getLocalUser } = useLocalUser();
   const userData = getLocalUser();
   const isLoggedIn = !!userData;

   return (
      <nav className="w-[99vw] bg-[#131921] flex items-center justify-between py-2 px-5 text-white">
         <div className="w-32 bg-white p-1">
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
               alt="amazon"
               className="w-full"
            />
         </div>
         <div className="flex items-center text-white text-xs cursor-pointer gap-1">
            <MapPin className="text-white" />
            <div className="flex flex-col">
               <span className="text-slate-200">Delivering to Pune 411011</span>
               <span className="font-bold text-sm">Update Location</span>
            </div>
         </div>

         {/* search */}
         <div className="w-[60%]  border-slate-100 flex items-center justify-center rounded-md overflow-hidden">
            <span className="w-[15%] py-2 bg-slate-500 h-full text-slate-200 px-2 cursor-pointer">
               Amazon
            </span>
            <input
               type="text"
               placeholder="Search for products..."
               className="w-[80%] py-2 bg-white"
            />
            <button className="w-[5%] flex items-center justify-center py-2 bg-[#febd69] cursor-pointer">
               <SearchIcon className="text-black" />
            </button>
         </div>

         <div className="flex items-center justify-center">
            <img
               src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20240827082344"
               alt="Ind"
               className="w-6 h-4"
            />
            <select name="" id="" className="font-bold">
               <option value="EN" selected>
                  EN
               </option>
            </select>
         </div>

         {isLoggedIn ? (
            <div className="text-xs flex flex-col items-start justify-center">
               <span>Hello, {userData.displayName.split(" ")[0]}</span>
               <span className="font-bold">Accounts & Lists</span>
            </div>
         ) : (
            <Link
               to={"/signup"}
               className="text-xs flex flex-col items-start justify-center"
            >
               <span>Hello, sign up</span>
               <span className="font-bold">Accounts & Lists</span>
            </Link>
         )}

         <div className="text-xs flex flex-col">
            <span>Returns</span>
            <span className="font-bold">& Orders</span>
         </div>

         <Link to={"/checkout"} className="relative">
            <ShoppingCart />
            <span className="bg-[#f08804] absolute -top-1 -right-1 rounded-full text-xs py-0 px-1">
               {cart.length}
            </span>
         </Link>
      </nav>
   );
};

export default Navigation;
