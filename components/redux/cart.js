import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    vat: 0,
  },
  reducers: {
    setCart: (state, action) => {
      //  CHECKS FOR DUPLICATE ORDERS BEFORE PUSHING A NEW ORDER
      if (
        state.cartItems.find((e) => e.name === action.payload.newOrder.name) ===
        undefined
      ) {
        state.cartItems.push(action.payload.newOrder);
      } else {
        console.log("no");
      }
    },
    decrementQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (action.payload.id === item.id && item.quantity > 0) {
          item.quantity--;
        }
      });
    },
    incrementQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (action.payload.id === item.id) {
          item.quantity++;
        }
      });
    },
    // Calculates total for each item
    setTotalForEach: (state, action) => {
      state.cartItems.map((item) => {
        if (action.payload.id === item.id) {
          item.total = item.price * item.quantity;
        }
      });
    },
    // CALCULATES TOTAL FOR ALL ITEMS
    setTotal: (state) => {
      let t = 0;
      state.cartItems.map((item) => {
        t += item.total;
      });
      state.total = t;
    },
  },
});
export const {
  setTotalForEach,
  setTotal,
  setCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
