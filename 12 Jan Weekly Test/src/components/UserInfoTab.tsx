import { IUser, useUsers } from "@/context/UsersContext";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

interface Props {
   user: IUser;
}

const UserInfoTab = ({ user }: Props) => {
   const { deleteUser } = useUsers();
   const handleUserDelete = () => {
      deleteUser(user.id);
   };

   return (
      <TableRow>
         <TableCell className="font-medium capitalize">{user.name}</TableCell>
         <TableCell>{user.dob}</TableCell>
         <TableCell>{user.aadharNumber}</TableCell>
         <TableCell>{user.mobileNumber}</TableCell>
         <TableCell>{user.age}</TableCell>
         <TableCell className="text-right">
            <Button variant={"ghost"} onClick={handleUserDelete}>
               <Trash className="text-red-500" />
            </Button>
         </TableCell>
      </TableRow>
   );
};

export default UserInfoTab;
