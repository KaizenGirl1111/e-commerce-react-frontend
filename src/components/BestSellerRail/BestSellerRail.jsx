import { FaSquarePlus } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import useFetchItems from "../../utils/useFetchItems";
import ProductRail from "../ProductRail/ProductRail";
function BestSellerRail(/*{ category, start, end }*/) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { data, loading, error } = useFetchItems(`${BACKEND_URL}/clothing`);

  return (
    <>
    <div className="mt-10 flex gap-10 pt-8 pl-12 h-[560px] w-[70%] bg-linear-to-bl from-violet-200 to-fuchsia-200 " style={{borderTopRightRadius: "160px"}}>
      <h1 className="mt-12 font-bold text-slate-950 text-3xl">Special Sales</h1>
      </div>
            <ProductRail start={13} end={15}/>
    </>

  );
}

export default BestSellerRail;