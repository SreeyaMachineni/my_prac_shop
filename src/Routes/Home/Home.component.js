// import {ProductContext} from '../../Context/Product.context'
// import { getProducts } from "../../Utils/Product.util"
// import {setCategories} from '../../store/product/product.action'

import { Link, Outlet } from "react-router-dom"
import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {selectCategories} from '../../store/product/product.selector'
import { fetchCategoryAsync } from "../../store/product/product.action"
import { selectCategoriesLoading } from "../../store/product/product.selector"

const Home = () => {
    // const {products,setProducts} = useContext(ProductContext)
    const dispatch = useDispatch()
    const products = useSelector(selectCategories)
    const isLoading = useSelector(selectCategoriesLoading)
    console.log(products,'-----------')
    useEffect(()=>{
        dispatch(fetchCategoryAsync())
    },[])

   
    return (
        <>

        {isLoading ? <div>loading</div> : <>{products?.categories?.map((p,index)=> {
        return (
            <Link to={'/shop/'+p.title} key={index}>
                <div>{p.title}</div>
            </Link>
        )
       })}</> }

      
        <Outlet/>
        </>
    )
}

export default Home