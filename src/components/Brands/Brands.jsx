import vite from "/vite.svg"
function Brands(){

return(
    <div className="mb-20 flex flex-col gap-3 w-full align-start">
    <div className="mt-5 flex justify-between text-purple-800  items-center">
     <h1 className="text-2xl  font-bold text-left">Brands</h1>
     <p className="text-md">View All</p>
    </div>
      <div className="flex flex-row justify-evenly gap-2">
                
{Array(10).fill(0).map((_, i) => (
  <img key={i} src={`/assets/brands/brand-${i+1}.png`} className="rounded-full h-[100px] w-[100px] aspect-square" />
))}        
         </div>
    </div>
)
}

export default Brands