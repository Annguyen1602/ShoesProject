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
      let arrAddCart = [...state.arrCart];
      let index = arrAddCart.findIndex(
        (item) => item.name === productDetail.name
      );
      if (index === -1) {
        arrAddCart.push(productDetail);
      } else {
        arrAddCart[index].quantity += 1;
      }

      state.arrCart = arrAddCart;
    },
    quantityChangePlus: (state, action) => {
      let index = action.payload;
      let arrAddCart = [...state.arrCart];
      arrAddCart[index].quantity += 1;
      state.arrCart = arrAddCart;
    },
    quantityChangeMinus: (state, action) => {
        let index = action.payload;
        let arrAddCart = [...state.arrCart];
        arrAddCart[index].quantity -= 1;
        state.arrCart = arrAddCart;
      }
  },
});

export const { getArrCartAction, quantityChangePlus,quantityChangeMinus } = cartReducer.actions;

export default cartReducer.reducer;
