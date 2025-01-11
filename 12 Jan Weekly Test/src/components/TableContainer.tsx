import { Outlet, useLocation } from "react-router-dom";
import { Badge } from "./ui/badge";

const TableContainer = () => {
   const { pathname } = useLocation();
   const isAddUser = pathname === "/";

   return (
      <div className="border h-[85vh] mt-3 mx-4 p-4 rounded-md drop-shadow-sm">
         <Badge variant={"outline"} className="text-sm">
            {isAddUser ? "Add new person" : "Get user information"}
         </Badge>
         <Outlet />
      </div>
   );
};

export default TableContainer;
