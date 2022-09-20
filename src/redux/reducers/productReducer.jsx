import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/tool';

const initialState = {
    arrProduct:[],
    


}


const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction:(state,action)=>{
        // lấy dữ liệu
        const arrProduct = action.payload;
        state.arrProduct = arrProduct;


    }
  }
});

export const {getProductAction} = productReducer.actions

export default productReducer.reducer



// ------------action API------------------

export const getProductApi =()=>{
    return async (dispatch2) =>{
        try {
            const result = await http.get("/product")
            const action = getProductAction(result.data.content)
            dispatch2(action)
        } catch (error) {
            console.log(error);
            
        }

    }
}

