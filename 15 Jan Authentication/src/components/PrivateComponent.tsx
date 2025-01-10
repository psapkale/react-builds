import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/auth/firebase";
import { toast } from "react-hot-toast";

const PrivateComponent = () => {
   const navigate = useNavigate();
   const accessToken = localStorage.getItem("accessToken");

   if (!accessToken) {
      navigate("/signin");
      return;
   }

   const handleLogout = () => {
      signOut(auth);

      if (accessToken) {
         localStorage.removeItem("accessToken");
      }

      navigate("/");
      toast.success("Logout successful");
   };

   return (
      <div className="text-lg h-screen flex items-center justify-center flex-col gap-2">
         This is a private section
         <Button onClick={handleLogout}>Logout</Button>
      </div>
   );
};

export default PrivateComponent;
