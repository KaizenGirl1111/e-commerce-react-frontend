import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function Navbar()
{
   return <div className="mt-0 mr-0 w-[100%] header flex flex-col gap-4 items-center pb-2 border-b-1 border-gray-400">
      <div className="mt-0 w-[100%] search-box flex flex-nowrap justify-between">
      <div className="flex-0 text-yellow-400 font-bold text-md bg-purple-800 px-8 py-1 rounded-full">RITU</div>
      <input type="text" id="search-field" name="search-field" placeholder="Search" className="basis-1/2 border-1 border-purple-800 py-1 pr-2 pl-1 rounded-sm  placeholder:text-gray-400" onChange={()=>{}}/>
      {/* <div className="flex flex-row gap-3 justify-end items-center">
      <FaShoppingCart/>
      <button className="flex flex-row items-center border-1 border-purple-800 p-2 rounded-sm gap-1"><FaUser />
Login/Signup</button>
      </div> */}
      <div class="flex items-center gap-4">
          <div class="text-purple-800 text-lg">      <FaShoppingCart/>
</div>
          <button class="flex gap-2 items-center border border-purple-600 text-purple-800 px-4 py-1.5 rounded-lg text-md hover:bg-purple-50">
            <FaUser /> Login / Signup
          </button>
        </div>
      </div>
      <div className="flex justify-between w-[60%] text-purple-800">
      <div className="flex justify-between w-[50%]">
      <div>Clothing</div>
      <div>Accessories</div>
      <div>Home</div>
      </div>
      <div className="flex d-flex justify-evenly w-[50%]">
         <div className="text-gray-400"> |</div>
         <div>Blogs</div>
         <div>Our brands</div>
      </div>
      </div>
   </div>
}

export default Navbar;