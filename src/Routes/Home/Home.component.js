import { Link, Outlet } from "react-router-dom"
import { useContext, useEffect } from "react"
import {ProductContext} from '../../Context/Product.context'
import { getProducts } from "../../Utils/Product.util"

const Home = () => {
    const {products,setProducts} = useContext(ProductContext)

    useEffect(()=>{
        const fetchData =  () => {
            const prods =  getProducts().then(
                (response)=> response.json())
                .then((res)=>{setProducts(res)})
         }
         fetchData();
    },[])

   

    // console.log(products,'from home')
    return (
        <>
       {products?.map((p,index)=> {
        return (
            <Link to={'/shop/'+p.title} key={index}>
                <div>{p.title}</div>
            </Link>
        )
       })}
        <Outlet/>
        </>
    )
}

export default Home