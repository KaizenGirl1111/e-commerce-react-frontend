import { FaSquarePlus } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import useFetchItems from "../../utils/useFetchItems";
function BestSalesOfWeek({start,end}){
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const { data, loading, error } = useFetchItems(`${BACKEND_URL}/clothing`);
    const categories = ["NEW ARRIVALS","Shirts","Kurtis"]


    return(
    <div className="mb-20 bg-amber-100 pb-10 px-3">
      <div className="flex flex-row justify-between items-end">
        <h1 className="mt-5 text-4xl text-purple-800 font-bold">Best sales of week</h1>
        <div className="flex items-center  text-purple-800">
          <p>View all</p>
          <FaAngleRight className="mt-1 font-bold" />
        </div>
      </div>
       <div className="flex gap-2 my-1">
          {categories.map((category)=>
          <div className="rounded-full bg-purple-300 hover:bg-purple-800 text-purple-800 hover:text-white py-1 px-2">
            {category}
          </div>
          )
}
        </div>
      <div className="flex flex-row justify-between">
        {error ? (
          <h1>Error</h1>
        ) : loading ? (
          <h1>Loading...</h1>
        ) : (
          data?.slice(start, end).map((product) => {
            const discountedPrice =
              product.price - product.price * (product.discount / 100);
            return (
              <div className="w-[365px] shadow-lg">
                <img src={product.image} className=" w-[365px] h-[390px]" />
                <h2 className="text-purple-800 font-bold text-lg">
                  {product.name}
                </h2>
                <div className="flex flex-row bg-purple-100 justify-between items-center py-1">
                  <p className="text-purple-800 font-bold text-lg">
                    ₹ {discountedPrice}
                  </p>
                  <p className="text-purple-600 text-bold text-lg line-through">
                    ₹ {product.price}
                  </p>
                  <FaSquarePlus className="text-4xl text-purple-800 rounded-sm" />
                </div>
              </div>
            );
          })
        )}
      </div>
      </div>
    )
}

export default BestSalesOfWeek;