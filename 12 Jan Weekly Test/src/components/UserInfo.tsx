import { useState } from "react";
import { Input } from "./ui/input";
import { IUser, useUsers } from "@/context/UsersContext";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "react-hot-toast";

const UserInfo = () => {
   const { findUser } = useUsers();
   const [user, setUser] = useState<IUser | undefined>(undefined);
   const [aadharNumber, setAadharNumber] = useState(0);

   const handleFindUser = (e: React.FormEvent) => {
      e.preventDefault();

      if (aadharNumber < 100000000000 || aadharNumber > 999999999999) {
         return toast.error("Aadhar number is not valid");
      }
      const u = findUser(aadharNumber);

      if (!u) {
         return toast.error("User not found");
      }

      setUser(u);
   };

   return (
      <div className="mt-10 flex flex-col gap-3">
         <form
            onSubmit={handleFindUser}
            className="flex items-center justify-start gap-2"
         >
            <Input
               type="number"
               value={aadharNumber}
               min={100000000000}
               max={999999999999}
               onChange={(e) => setAadharNumber(+e.target.value)}
               className="sm:w-[50vw]"
               placeholder="Enter aadhar number"
            />
            <Button type="submit">Search</Button>
         </form>
         {user && (
            <Card>
               <CardHeader>
                  <CardTitle className="capitalize">
                     Name: {user.name}
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <div>
                     <span>Date of birth: </span>
                     <span>{user.dob}</span>
                  </div>
                  <div>
                     <span>Aadhar number: </span>
                     <span>{user.aadharNumber}</span>
                  </div>
                  <div>
                     <span>Mobile number: </span>
                     <span>{user.mobileNumber}</span>
                  </div>
                  <div>
                     <span>Age: </span>
                     <span>{user.age}</span>
                  </div>
               </CardContent>
            </Card>
         )}
      </div>
   );
};

export default UserInfo;
