export const useLocalCart = () => {
   const getCartItems = () => {
      const cartItems = localStorage.getItem("cartItems");

      if (!cartItems) return [];

      return JSON.parse(cartItems);
   };

   const updateCartItems = (newCart) => {
      const cartItems = localStorage.setItem(
         "cartItems",
         JSON.stringify(newCart)
      );

      return cartItems;
   };

   const clearCart = () => {
      localStorage.setItem("cartItems", [].toString());
   };

   return { getCartItems, updateCartItems, clearCart };
};
