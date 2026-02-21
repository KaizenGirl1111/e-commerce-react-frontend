import React from "react";

function Header()
{
   return <div className="mt-0 mr-0 w-[100%] header flex flex-col gap-4 items-center">
      <div className="mt-0 w-[100%] search-box flex flex-nowrap justify-between">
      <div className="flex-0 text-purple-800">Logo</div>
      <input type="text" id="search-field" name="search-field" placeholder="Search" className="basis-1/3 border-1 border-purple-800 py-1 pr-2 pl-1 rounded-sm  placeholder:text-gray-400" onChange={()=>{}}/>
      <div className="flex flex-row gap-2 justify-end items-center">
      <div>cart</div>
      <button className="border-1 border-purple-800 p-1.5 rounded-sm">Login/Signup</button>
      </div>
      </div>
      <div className="flex justify-between w-[50%] text-purple-800">
      <div className="flex justify-between w-[50%]">
      <div>Clothing</div>
      <div>Accessories</div>
      <div>Home</div>
      </div>
      <div className="flex d-flex justify-evenly w-[50%]">
         <div>   |</div>
         <div>Blogs</div>
         <div>Our brands</div>
      </div>
      </div>
   </div>
}

export default Header;