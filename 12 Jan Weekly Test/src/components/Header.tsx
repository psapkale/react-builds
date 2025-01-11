import { Badge } from "./ui/badge";

const Header = () => {
   return (
      <div className="w-full h-10 grid place-content-center">
         <Badge className="w-32 flex items-center justify-center">
            Directory App
         </Badge>
      </div>
   );
};

export default Header;
