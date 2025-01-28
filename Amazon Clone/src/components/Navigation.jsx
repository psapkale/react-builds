import { MapPin, SearchIcon } from "lucide-react";

const Navigation = () => {
   return (
      <nav className="w-screen bg-[#131921] flex items-center gap-2 py-2 px-4 text-white">
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
         <div className="w-[50%] border border-slate-100 flex items-center justify-center cursor-pointer">
            <span className="w-[15%] py-2 bg-slate-500 h-full text-slate-200 px-2">
               Amazon
            </span>
            <input
               type="text"
               placeholder="Search for products..."
               className="w-[80%] py-2 border border-black bg-white"
            />
            <span className="w-[5%] flex items-center justify-center py-2 bg-orange-500">
               <SearchIcon className="" />
            </span>
         </div>
      </nav>
   );
};

export default Navigation;
