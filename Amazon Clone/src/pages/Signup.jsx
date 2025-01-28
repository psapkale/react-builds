import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import { useLocalUser } from "../hooks/useLocalUser";
import { toast } from "react-toastify";

const Signup = () => {
   const { updateLocalUser } = useLocalUser();
   const navigate = useNavigate();

   const handleSignUp = async () => {
      const user = await signInWithPopup(auth, googleProvider);

      const updatedUser = updateLocalUser(
         user.user.email,
         user.user.displayName,
         user.user.photoURL
      );

      if (updatedUser) {
         toast.success("Signup successful");
         navigate("/");
      } else {
         toast.error("Error signning up");
      }
   };

   return (
      <div className="h-screen border border-black flex items-center justify-center">
         <div className="py-4 px-10 flex items-center justify-between flex-col gap-4 border border-gray-400 drop-shadow-lg rounded-lg">
            <h1 className="text-lg">Sign Up</h1>
            <button
               className="p-2 border border-slate-400 rounded-lg cursor-pointer"
               onClick={handleSignUp}
            >
               Sign up with Google
            </button>
            <span>
               Already have an account?{" "}
               <Link to={"/login"} className="text-blue-500 underline">
                  Login
               </Link>
            </span>
         </div>
      </div>
   );
};

export default Signup;
