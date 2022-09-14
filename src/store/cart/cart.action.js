import { CART_ACTION_TYPES } from './cart.type';
import { createAction } from '../../Utils/Reducer.util';

const addCartItem = (cart,item) => {
    // check if item exixts
    const existingItem = cart.find((c) => c.id === item.id)
    if (existingItem) {
        return cart.map((c) => 
            c.id === item.id
        ? { ...c, quantity: c.quantity + 1 }
        : c
        ) 
    } 
    return [...cart, { ...item, quantity: 1 }];
}

const removeCartItem = (cart, item) => {
    const cartItem = cart.find((c)=> c.id === item.id)

    if(cartItem.quantity === 1){
    return cart.filter((c)=> c.id != item.id)
    }
    else{

        return cart.map((c) => 
            c.id === item.id
        ? { ...c, quantity: c.quantity - 1 }
        : c
        )
    }
}


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  
  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };