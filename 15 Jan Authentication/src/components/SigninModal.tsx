import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/auth/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SigninModal = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const setLocalStorage = (key: string, value: any) => {
      const item = localStorage.getItem(key);

      if (item) {
         localStorage.removeItem(key);
      }

      localStorage.setItem(key, value);
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
         const res = await signInWithEmailAndPassword(auth, email, password);
         console.log(res);
         // @ts-ignore
         setLocalStorage("accessToken", res.user.accessToken);
         // @ts-ignore
         toast.success("Welcome ", res.user.displayName);
      } catch (err) {
         console.error("Error occured while signin: ", err);
         toast.error("Error occured while signin");
      }
   };

   const handleGoogleSignin = async () => {
      try {
         const res = await signInWithPopup(auth, googleProvider);
         if (res) {
            // @ts-ignore
            const accessToken = res.user.accessToken;
            setLocalStorage("accessToken", accessToken);
            navigate("/protected-route");
            // @ts-ignore
            toast.success("Welcome ", res.user.displayName);
         }
      } catch (err) {
         console.error("Error occured while signin: ", err);
         toast.error("Error occured while signin");
      }
   };

   return (
      <div className="h-screen flex items-center justify-center">
         <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="relative">
               <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-foreground rounded-2xl blur-2xl opacity-25" />
               <div className="relative bg-card rounded-xl border shadow-2xl shadow-primary/10">
                  <div className="p-6">
                     <div className="space-y-2 mb-8">
                        <h2 className="text-2xl font-bold">Welcome🍁</h2>
                        <p className="text-muted-foreground">
                           Sign in to your account
                        </p>
                     </div>
                     <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                           <Input
                              required
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="h-11"
                           />
                        </div>
                        <div className="space-y-2">
                           <Input
                              required
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="h-11"
                           />
                        </div>
                        <Button
                           type="submit"
                           className="w-full h-11"
                           variant={"secondary"}
                        >
                           Sign In
                        </Button>
                     </form>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                     <hr className="border w-[40%]" />
                     <span className="text-sm text-slate-600 -translate-y-1">
                        or
                     </span>
                     <hr className="border w-[40%]" />
                  </div>
                  <div className="my-2 w-full flex items-center justify-center">
                     <Button
                        className="w-[90%] h-11"
                        variant={"default"}
                        onClick={handleGoogleSignin}
                     >
                        Sign in with Google
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SigninModal;
