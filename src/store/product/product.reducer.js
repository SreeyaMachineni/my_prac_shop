import { CATEGORIES_ACTION_TYPES } from "./product.type";

export const CATEGORIES_INITIAL_STATE = {}

export const CategoriesReducer = (state=CATEGORIES_INITIAL_STATE, action={}) => {
    const {type,payload} = action
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {...state, categories:payload}
        default:
            return state
    }


}