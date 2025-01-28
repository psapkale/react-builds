export const useLocalUser = () => {
   const getLocalUser = () => {
      return JSON.parse(localStorage.getItem("userData"));
   };

   const updateLocalUser = (email, displayName, photoURL) => {
      const newUserData = {
         email,
         displayName,
         photoURL,
      };

      localStorage.setItem("userData", JSON.stringify(newUserData));

      return newUserData;
   };

   const removeLocalUser = () => {
      return localStorage.removeItem("userData");
   };

   return { getLocalUser, updateLocalUser, removeLocalUser };
};
