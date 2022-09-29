import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrCart: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    getArrCartAction: (state, action) => {
      const productDetail = action.payload;
      console.log(productDetail);
      const arrAddCart = [...state.arrCart];
      arrAddCart.push(productDetail)

      
      state.arrCart = arrAddCart;
    },
  },
});

export const { getArrCartAction } = cartReducer.actions;

export default cartReducer.reducer;
