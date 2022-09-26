import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./reducers/productReducer"
import userLoginReducer from "./reducers/userLoginReducer"


export const store = configureStore({
    reducer:{
        productReducer:productReducer,
        userLoginReducer:userLoginReducer
    }
})