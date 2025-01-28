import FeaturedProducts from "../components/FeaturedProducts";
import HeroProducts from "../components/HeroProducts";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
   return (
      <div>
         <ImageCarousel />
         <HeroProducts />
         <FeaturedProducts />
      </div>
   );
};

export default Home;
