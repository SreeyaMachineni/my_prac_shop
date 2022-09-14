import { useContext } from "react"
import { CartContext } from "../../Context/Cart.context"
import { useSelector, useDispatch } from "react-redux"
import {  selectCartItems, selectCartTotal } from "../../store/cart/cart.selector"
import { addItemToCart,removeItemFromCart } from "../../store/cart/cart.action"

const Cart = ()=>{

    // const {cart,removeCartItem,addToCart,cartTotal} = useContext(CartContext)
    const {cart} = useSelector(selectCartItems)
    const cartTotal = useSelector(cart => selectCartTotal(cart))
    console.log(cartTotal,'--------ct')
    const dispatch = useDispatch()
    const addProdToCart = (p)=> dispatch(addItemToCart(cart,p))
    const removeProd = (p) => dispatch(removeItemFromCart(cart,p))


    
    return (
        <>
        {
           cart.map((c)=> {return  (
            <>
           <div>{c.name} - {c.price}</div>
           <div>{c.quantity}</div>
           <button onClick={()=>{addProdToCart(c)}}>Add</button>
           <button onClick={()=>{removeProd(c)}}>Remove</button>

        </>
           )
        })
        }

        <div> total : {cartTotal}</div>
        </>
    )
}

export default Cart