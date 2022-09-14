import { createContext,useEffect,useState } from "react";
import  {getProducts}  from "../Utils/Product.util";

export const ProductContext = createContext({
    products:[]
})
export const ProductContextProvider = ({children}) =>{
    
    const [products,setProducts] = useState([])

    // useEffect(()=>{
    //     getProds()
        
    // },[])

    // const getProds = async()=>{
    //     const prods = await getProducts()
    //     console.log(prods)
    // }


    const value = {products,setProducts}
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

