import vite from "/vite.svg"
function Brands(){

return(
    <div className="mb-20 flex flex-col w-full align-start">
     <h1 className="mt-5 text-2xl text-purple-800 font-bold">Brands</h1>
      <div className="flex flex-row justify-evenly gap-2">
                
{Array(10).fill(0).map((_, i) => (
  <img key={i} src={vite} className="h-[50%] w-[50%]" />
))}        
         </div>
    </div>
)
}

export default Brands