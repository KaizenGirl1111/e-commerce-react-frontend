import { useEffect } from "react"
function ProductsPage(){
   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

   const getProducts =async ()=>{
     const res = await fetch(`${BACKEND_URL}/clothing`)
     const data = await res.json()
     console.log(data)
   }

   useEffect(()=>{
     getProducts()
   },[])
    return(<>
    </>)
}

export default ProductsPage