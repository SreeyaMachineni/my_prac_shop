import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const addToCart = (item) => {
        // check if item exixts
        const existingItem = cart.find((c) => c.id === item.id)
        if (existingItem) {
            cart.map((c) => {
                if(c.id === existingItem.id){
                    c.quantity++
                }
            })
            setCart([...cart])
        } else {
            setCart([...cart, { ...item, quantity: 1 }])
        }
    }

    const removeCartItem = (item) => {
        const cartItem = cart.find((c)=> c.id === item.id)
        if(cartItem.quantity === 1){
           setCart([...cart.filter((c)=> c.id != item.id)]) 
        }
        else{
            cart.map((c)=>{
                if(c.id === item.id){
                    c.quantity--
                    setCart([...cart])
                }
            })
        }
    }

    useEffect(() => {
        const cartCnt = cart.reduce((total, cartItem) => { return total + cartItem.quantity }, 0)
        setCartCount(cartCnt)
    }, [cart])

    useEffect(()=>{
        const cartTotal = cart.reduce((total,item)=> total + item.quantity * item.price, 0)
        setCartTotal(cartTotal)

    },[cart])

    const value = {
        cart, addToCart, cartCount,removeCartItem,cartTotal
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}