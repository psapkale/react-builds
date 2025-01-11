import { useState } from "react";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "./ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useUsers } from "@/context/UsersContext";
import UserInfoTab from "./UserInfoTab";
import { toast } from "react-hot-toast";

const UsersList = () => {
   const { users, addUser } = useUsers();
   const [isAddOpen, setIsAddOpen] = useState(false);
   const [name, setName] = useState("");
   const [date, setDate] = useState("");
   const [aadharNumber, setAadharNumber] = useState(0);
   const [mobileNumber, setMobileNumber] = useState(0);

   const handleAddUser = () => {
      if (name.length < 2) {
         return toast.error("Name is too short");
      }
      if (aadharNumber < 100000000000 || aadharNumber > 999999999999) {
         return toast.error("Aadhar number is not valid");
      }
      if (mobileNumber < 1000000000 || mobileNumber > 9999999999) {
         return toast.error("Mobile number is not valid");
      }

      addUser(name, date, aadharNumber, mobileNumber);
      setIsAddOpen(false);
   };

   return (
      <>
         <Table className="w-[90%] mt-3 mx-auto">
            <TableHeader>
               <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Date of Birth</TableHead>
                  <TableHead>Aadhar number</TableHead>
                  <TableHead>Mobile number</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {users.map((user) => (
                  <UserInfoTab key={user.mobileNumber} user={user} />
               ))}
               {isAddOpen && (
                  <TableRow>
                     <TableCell className="font-medium">
                        <Input
                           type="text"
                           value={name}
                           minLength={2}
                           onChange={(e) => setName(e.target.value)}
                        />
                     </TableCell>
                     <TableCell>
                        <Input
                           type="date"
                           value={date}
                           onChange={(e) => setDate(e.target.value)}
                        />
                     </TableCell>
                     <TableCell>
                        <Input
                           type="number"
                           min={100000000000}
                           max={999999999999}
                           value={aadharNumber}
                           onChange={(e) => setAadharNumber(+e.target.value)}
                        />
                     </TableCell>
                     <TableCell>
                        <Input
                           type="number"
                           min={1000000000}
                           max={9999999999}
                           value={mobileNumber}
                           onChange={(e) => setMobileNumber(+e.target.value)}
                        />
                     </TableCell>
                     <TableCell>-</TableCell>
                     <TableCell className="text-right">
                        <Button variant={"outline"} onClick={handleAddUser}>
                           Save
                        </Button>
                     </TableCell>
                  </TableRow>
               )}
            </TableBody>
         </Table>
         <div className="flex items-center justify-end">
            <Button className="mt-2" onClick={() => setIsAddOpen(true)}>
               Add User
            </Button>
         </div>
      </>
   );
};

export default UsersList;
