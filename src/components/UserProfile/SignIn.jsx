
import {useFormik} from "formik"
import { useState } from "react";
import axios from "axios";

function SignIn(){

 const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
 const [formData,setFormData] = useState({email:"",password:""})
 const initialValues = {...formData}
 const formik = useFormik({initialValues,onSubmit:(values)=>{
    postData(values)
    setFormData(values)
}});

 const postData = async (values)=>{
    try{
        console.log(values)
       const req = await axios.post(`${BACKEND_URL}/login`,values)
       console.log("posted data",req.data)
    }
    catch(error){
        console.log("Error signing in",error)
    }
 }


return(


    <div className="flex w-full relative h-screen" style={{ background: "linear-gradient(to right, #ef629f, #eecda3)"}}>
      <div className="absolute  w-[50%] h-screen">
        <img src="/assets/hero_right_test.webp" className="opacity-70 w-full h-full"/>
      </div>
      <div className="absolute left-[63%] mt-20 flex flex-col">
        <h1 className="text-2xl font-semibold">Sign In your account</h1>
        <p className="text-start mb-6">Continue shopping with us</p>
        <form onSubmit={formik.handleSubmit}  className="flex flex-col mt-3 gap-2">
        
            <div className="flex flex-col">
            <label htmlFor="email" className="text-start block text-gray-700 text-base font-bold mb-2">Email</label>
            <input id="email" name="email" onChange={formik.handleChange} type="email" value = {formik.values.email} placeholder="Email"  className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="flex flex-col">

            <label htmlFor="password" className="text-start block text-gray-700 text-base font-bold mb-2">Password</label>
            <input id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="*******" type="password" className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <input type="Submit" text="Submit" className="bg-purple-700 w-75 p-1 rounded text-white mt-3"/>
        </form>
      </div>
    </div>

)
}

export default SignIn;