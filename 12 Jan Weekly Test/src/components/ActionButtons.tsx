import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const ActionButtons = () => {
   return (
      <div className="mt-2 flex items-center justify-center gap-2 pl-2">
         <Link to={"/"}>
            <Button variant={"outline"}>Add new person</Button>
         </Link>
         <Link to={"/user"}>
            <Button variant={"outline"}>Get user information</Button>
         </Link>
      </div>
   );
};

export default ActionButtons;
