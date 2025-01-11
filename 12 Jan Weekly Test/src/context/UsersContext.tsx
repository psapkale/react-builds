import {
   Dispatch,
   SetStateAction,
   useState,
   useContext,
   createContext,
} from "react";

export interface IUser {
   id: number;
   name: string;
   dob: string;
   aadharNumber: number;
   mobileNumber: number;
   age: number;
}

interface UsersContextType {
   users: IUser[];
   setUsers: Dispatch<SetStateAction<IUser[]>>;
}

const UsersContext = createContext<UsersContextType>({
   users: [],
   setUsers: () => {},
});

const useUsers = () => {
   const { users, setUsers } = useContext(UsersContext);

   const updateUserToLocalStorage = (user: IUser) => {
      const newUsers = [...users, user];
      localStorage.setItem("users", JSON.stringify(newUsers));
   };

   const removeUserFromLocalStorage = (id: number) => {
      const usersString = localStorage.getItem("users");
      let localUsers: IUser[] | null = null;

      if (usersString) {
         localUsers = JSON.parse(usersString);

         if (localUsers) {
            const newUsers = localUsers.filter((x: IUser) => x.id !== id);
            localStorage.setItem("users", JSON.stringify(newUsers));
         }
      }
   };

   function calculateAge(birthDate: string) {
      const birth = new Date(birthDate);
      const today = new Date();

      let age = today.getFullYear() - birth.getFullYear();
      const monthDifference = today.getMonth() - birth.getMonth();

      if (
         monthDifference < 0 ||
         (monthDifference === 0 && today.getDate() < birth.getDate())
      ) {
         age--;
      }

      return age;
   }

   const findUser = (aadharNumber: number) => {
      return users.find((x: IUser) => x.aadharNumber === aadharNumber);
   };

   const addUser = (
      name: string,
      dob: string,
      aadharNumber: number,
      mobileNumber: number
   ) => {
      const user: IUser = {
         id: Math.random(),
         name,
         dob: dob.split("-").reverse().join("-"),
         aadharNumber,
         mobileNumber,
         age: calculateAge(dob),
      };
      const newUsers = [...users, user];

      updateUserToLocalStorage(user);
      setUsers(newUsers);
   };

   const deleteUser = (id: number) => {
      const user = users.find((x: IUser) => x.id === id);

      if (user) {
         const newUsers = users.filter((x: IUser) => x.id !== id);

         removeUserFromLocalStorage(id);
         setUsers(newUsers);
      }
   };

   return {
      users,
      findUser,
      addUser,
      deleteUser,
   };
};

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
   const usersString = localStorage.getItem("users");
   let localUsers: IUser[] | null = null;

   if (usersString) {
      localUsers = JSON.parse(usersString);
   }

   const [users, setUsers] = useState<IUser[]>(localUsers || []);

   return (
      <UsersContext.Provider value={{ users, setUsers }}>
         {children}
      </UsersContext.Provider>
   );
};

export { useUsers, UsersProvider };
