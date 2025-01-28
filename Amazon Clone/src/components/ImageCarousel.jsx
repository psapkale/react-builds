import { ArrowLeft, ArrowRight } from "lucide-react";
import {} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageCarousel = () => {
   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
      },
   };

   return (
      <Carousel
         className="border border-black  overflow-hidden"
         responsive={responsive}
         infinite
      >
         <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/BAU/travel/IF_PC-Hero-Template_GW-VX_PCH.T2-copy._CB538933352_.jpg"
            alt="c1"
            className="w-screen h-screen object-cover"
         />
         <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/Nov24/Tall_Hero_3000X1200_Amazfit._CB542432390_.jpg"
            alt="c2"
            className="w-screen h-screen object-cover"
         />
         <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/BAU/PC/Hero/HO/PSE/PSE_PC_3000X1200_T3._CB567196011_.jpg"
            alt="c3"
            className="w-screen h-screen object-cover"
         />
         <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/SSH/PC/2_Men_Prime-3._CB552221141_.jpg"
            alt="c4"
            className="w-screen h-screen object-cover"
         />
      </Carousel>
   );
};

export default ImageCarousel;
