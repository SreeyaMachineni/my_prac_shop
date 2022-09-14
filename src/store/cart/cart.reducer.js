import { CART_ACTION_TYPES } from "./cart.type"

const CART_INITIAL_STATE = {
    cart:[]
}

export const CartReducer = (state=CART_INITIAL_STATE ,action={}) => {
    const {type,payload} = action
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, cart:payload
            }
        default:
            return state
    }
}