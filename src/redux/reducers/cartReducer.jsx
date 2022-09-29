import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrCart:[]

}

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    getArrCartAction: (state,action)=>{
        const productDetail = action.payload
       const arr = state.arrCart.push(productDetail)
       state.arrCart =  arr
    }
  }
});

export const {getArrCartAction} = cartReducer.actions

export default cartReducer.reducer