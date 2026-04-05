import { FaSquarePlus } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

function BlogsRail(){
return(
     <div className="mb-20">
         <div className="flex flex-row justify-between items-end my-2">
           <h1 className="mt-5 text-4xl text-purple-800 font-bold">Best sales of week</h1>
           <div className="flex items-center  text-purple-800">
             <p>View all</p>
             <FaAngleRight className="mt-1 font-bold" />
           </div>
         </div>
      <div className="flex justify-between">
       {
        Array(3).fill(0).map((_,i)=>(
                <div className="w-[365px] shadow-lg flex flex-row justify-between">
                   <img src={`/assets/blog.jpg`} className=" w-[48%] h-full" />
                   <div className="flex flex-col">
                   <h2 className="text-purple-800 font-bold text-lg">
                    Blog Title
                   </h2>
        
                     <p className="text-purple-600 text-bold text-lg">
                       lorem ipsum blog content
                     </p>
                     <FaAngleRight className="text-2xl text-purple-800 rounded-sm ml-[80%]" />
                   </div>
                 </div>
        ))
       }
    </div>    
 </div>
)
}

export default BlogsRail