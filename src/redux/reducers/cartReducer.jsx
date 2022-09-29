import { createSlice } from "@reduxjs/toolkit";
import { indexOf } from "lodash";

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
      // let check = state.arrCart.indexOf(productDetail)
      indexOf
      const arrAddCart = [...state.arrCart];
      arrAddCart.push(productDetail)

      
      state.arrCart = arrAddCart;
    },
  },
});

export const { getArrCartAction } = cartReducer.actions;

export default cartReducer.reducer;



