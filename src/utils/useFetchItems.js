import {useState,useEffect} from "react"
function useFetchItems(url){
 const [data,setData] = useState([])
 const [loading,setLoading] = useState(false)
 const [error,setError] = useState(null)
 const getProducts = async ()=>{
    try{
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    if(data) setData(data)
    else throw new Error("Failed to fetch data")
    }
    catch(err){
        console.log(err)
        setError(err)
    }
    finally{
        setLoading(false)
    }
 }

 useEffect(()=>{
   getProducts()
 },[])
 return {data,loading,error}
}

export default useFetchItems