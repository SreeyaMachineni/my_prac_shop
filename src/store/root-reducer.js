import { combineReducers } from "redux";
import { CartReducer } from "./cart/cart.reducer";
import {CategoriesReducer} from './product/product.reducer'

export const rootReducer = combineReducers({cart:CartReducer, products:CategoriesReducer})