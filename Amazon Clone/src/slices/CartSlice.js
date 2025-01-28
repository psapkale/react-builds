import { createSlice } from "@reduxjs/toolkit";

// TODO implement local storage
const initialState = {
   cart: [
      {
         asin: "B0CWXNS552",
         product_title: "Apple AirTag",
         quantity: 1,
         product_price: "$24.99",
         product_original_price: "$29.00",
         currency: "USD",
         product_star_rating: "4.6",
         product_num_ratings: 2027,
         product_url: "https://www.amazon.com/dp/B0CWXNS552",
         product_photo:
            "https://m.media-amazon.com/images/I/71rP7f78eFL._AC_UL960_FMwebp_QL65_.jpg",
         product_num_offers: 11,
         product_minimum_offer_price: "$23.33",
         is_best_seller: false,
         is_amazon_choice: true,
         is_prime: true,
         climate_pledge_friendly: false,
         sales_volume: "10K+ bought in past month",
         delivery:
            "FREE delivery Wed, Jul 10 on $35 of items shipped by Amazon",
         has_variations: false,
      },
      {
         asin: "B0D5FZGY8W",
         product_title:
            "URO Vaginal Probiotics for Women pH Balance with Prebiotics &amp; Lactobacillus Probiotic Blend - Women&#x27;s Vaginal Health Supplement - Promote Healthy Vaginal Odor &amp; Vaginal Flora, 60 Count (Pack of 1)",
         quantity: 2,
         product_price: "$28.79",
         unit_price: "$0.48",
         unit_count: 60,
         product_original_price: "$31.99",
         currency: "USD",
         product_star_rating: "4.5",
         product_num_ratings: 376,
         product_url: "https://www.amazon.com/dp/B0D5FZGY8W",
         product_photo:
            "https://m.media-amazon.com/images/I/61tYAHJi3LL._AC_UL960_FMwebp_QL65_.jpg",
         product_num_offers: 1,
         product_minimum_offer_price: "$28.79",
         is_best_seller: true,
         is_amazon_choice: false,
         is_prime: true,
         climate_pledge_friendly: true,
         sales_volume: "100K+ bought in past month",
         delivery:
            "FREE delivery Wed, Jul 10 on $35 of items shipped by Amazon",
         has_variations: false,
      },
   ],
};

const cartSlice = createSlice({
   name: "cartSlice",
   initialState,
   reducers: {
      addItem: (state, action) => {
         const { asin } = action.payload;

         const prod = state.cart.find((x) => x.asin === asin);

         if (!prod) {
            state.cart.push(action.payload);
         }
      },
      removeItem: (state, action) => {
         const { asin } = action.payload;

         const prod = state.cart.find((x) => x.asin === asin);

         if (prod) {
            state.cart = state.cart.filter((x) => x.asin === asin);
         }
      },
      updateQuantity: (state, action) => {
         const { asin, operation } = action.payload;

         const prod = state.cart.find((x) => x.asin === asin);

         if (prod) {
            switch (operation) {
               case "INCREMENT":
                  state.cart = state.cart.map((x) =>
                     x.id === asin ? { ...x, quantity: x.quantity++ } : x
                  );
                  break;
               case "DECREMENT":
                  state.cart = state.cart.map((x) =>
                     x.id === asin ? { ...x, quantity: x.quantity-- } : x
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
