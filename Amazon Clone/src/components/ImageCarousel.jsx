import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const ImageCarousel = () => {
   const [index, setIndex] = useState(0);
   const images = [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/BAU/travel/IF_PC-Hero-Template_GW-VX_PCH.T2-copy._CB538933352_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/Nov24/Tall_Hero_3000X1200_Amazfit._CB542432390_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/BAU/PC/Hero/HO/PSE/PSE_PC_3000X1200_T3._CB567196011_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/SSH/PC/2_Men_Prime-3._CB552221141_.jpg",
   ];

   const handlePrev = () => {
      if (index === 0) {
         setIndex(images.length - 1);
         return;
      }

      setIndex((p) => p - 1);
   };

   const handleNext = () => {
      if (index === images.length - 1) {
         setIndex(0);
         return;
      }

      setIndex((p) => p + 1);
   };

   return (
      <div className="w-[99vw] relative">
         <button
            className="absolute top-[20%] left-0 px-2 cursor-pointer"
            onClick={handlePrev}
         >
            <ArrowLeft className="text-lg" />
         </button>
         <img
            className="w-[99vw] object-cover"
            src={images[index]}
            alt={`c${index + 1}`}
         />
         <button
            className="absolute top-[20%] right-0 px-2 cursor-pointer"
            onClick={handleNext}
         >
            <ArrowRight className="text-lg" />
         </button>
         <div className="relative bottom-[16rem] left-0 h-[16rem] bg-gradient-to-b from-transparent via-[rgba(207,207,207,0.61)] to-[#e3e6e6]" />
      </div>
   );
};

export default ImageCarousel;
