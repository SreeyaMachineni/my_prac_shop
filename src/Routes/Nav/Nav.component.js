import {Link, Outlet} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/Cart.context'

import { useSelector } from 'react-redux'
import {selectCartTotal,selectCartCount,selectCartItems} from '../../store/cart/cart.selector'
const Nav = () => {

    // const {cart,cartCount} = useContext(CartContext)
    const cart = useSelector(selectCartItems)
    
    const cartCount = useSelector(cart => selectCartCount(cart))


    return (
        <>
        <ul>
            <li>
                login
            </li>
            <li>
                <Link to='/shop'>Shop</Link>
            </li>
            <li>
                <Link to='/cart'>Cart</Link>
            </li>
            <li>{cartCount}</li>
        </ul>
        <Outlet/>
        </>
    )
}
export default Nav