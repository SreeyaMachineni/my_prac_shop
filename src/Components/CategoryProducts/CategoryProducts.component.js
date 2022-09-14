import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../../Context/Product.context"
// import { CartContext } from "../../Context/Cart.context"

import { useDispatch,useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import { addItemToCart } from "../../store/cart/cart.action"


const CategoryProducts = (props) => {
    const {products} = useContext(ProductContext)
    // const {addToCart} = useContext(CartContext)

    const dispatch = useDispatch()
    const {cart} = useSelector(selectCartItems)


    const {category} = useParams()
    const catProds = products.filter((p)=>p.title === category)[0]


    const addProdToCart = (p)=>dispatch(addItemToCart(cart,p))

    return (
       <>
        {catProds.items.map((cp)=>{
            return (
                <div key={cp.id}>
                    <h3>{cp.name}</h3>
                    <div>{cp.price}</div>
                    <button onClick={()=>addProdToCart(cp)}>add to cart</button>
                </div>
            )
        })}
       </>
    )
}

export default CategoryProducts