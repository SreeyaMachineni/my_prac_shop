export const selectCartItems = (state) => state.cart

export const selectCartTotal =  (cartItems) =>
cartItems.cart.cart.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0)



export const selectCartCount = (cartItems) =>
  cartItems.cart.cart.reduce((total, cartItem) => total + cartItem.quantity, 0)