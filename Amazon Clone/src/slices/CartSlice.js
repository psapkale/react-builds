import { createSlice } from "@reduxjs/toolkit";

// TODO implement local storage
const initialState = {
   cart: [],
};

const cartSlice = createSlice({
   name: "cartSlice",
   initialState,
   reducers: {
      addItem: (state, action) => {
         const { asin } = action.payload;

         const prod = state.cart.find((x) => x.asin === asin);

         if (!prod) {
            const newProduct = { ...action.payload, quantity: 1 };
            state.cart.push(newProduct);
         }
      },
      removeItem: (state, action) => {
         const { asin } = action.payload;

         const prod = state.cart.find((x) => x.asin === asin);

         if (prod) {
            state.cart = state.cart.filter((x) => x.asin !== asin);
         }
      },
      updateQuantity: (state, action) => {
         const { asin, operation } = action.payload;

         const prod = state.cart.find((x) => x.asin === asin);

         if (prod) {
            switch (operation) {
               case "INCREMENT":
                  state.cart = state.cart.map((x) =>
                     x.asin === asin ? { ...x, quantity: x.quantity + 1 } : x
                  );
                  break;
               case "DECREMENT":
                  state.cart = state.cart.map((x) =>
                     x.asin === asin ? { ...x, quantity: x.quantity - 1 } : x
                  );
                  break;

               default:
                  break;
            }
         }
      },
   },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
