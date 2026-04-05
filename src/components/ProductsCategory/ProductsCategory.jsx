import ReactSvg from "../../components/assets/react.svg"
import DressImg from "/assets/C23F2A9E-F35E-45AB-9889-11A9650EC022.jpg"
import SareeImg from "/assets/8E5B9E71-9710-4A86-9764-09D1470EBDFF.webp"
import ShirtImg from "/assets/shirt.webp"
import KurtaImg from "/assets/IMG_1995.png"
import LehengaImg from "/assets/gxqclXofJBP-410331822002_1.jpg"

function ProductsCategory(){

 return(
    <div className=" flex flex-col gap-2 items-center mb-20">
    <h1 className="text-purple-800 font-bold text-4xl">Products Category</h1>

      <div className="w-[50%] flex flex-row justify-self-center-safe justify-between gap-6 items-center">
        <div className="flex-1 flex flex-col gap-1 items-center">
        <img src={DressImg} className="w-[150px] h-[150px] border-2 rounded-full border-purple-200"/>
        <h2 className="text-purple-800 text-bold text-base">Ritu Kumar</h2>
        </div>
        <div className="flex-1 flex flex-col gap-1 items-center">
        <img src={SareeImg} className="w-[150px] h-[150px] border-2 rounded-full border-purple-200"/>
        <h2 className="text-purple-800 text-bold text-base">NEW ARRIVALS</h2>
        </div>
        <div className="flex-1 flex flex-col gap-1 items-center">
        <img src={ShirtImg} className="w-[150px] h-[150px] border-2 rounded-full border-purple-200"/>
        <h2 className="text-purple-800 text-bold text-base">Shirts</h2>
        </div>
        <div className="flex-1 flex flex-col gap-1 items-center">
        <img src={KurtaImg} className="w-[150px] h-[150px] border-2 rounded-full border-purple-200"/>
        <h2 className="text-purple-800 text-bold text-base">Kurtis</h2>
        </div>
      </div>
    </div>
 )
}

export default ProductsCategory