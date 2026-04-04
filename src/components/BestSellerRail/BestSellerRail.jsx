// import { FaSquarePlus } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa";
// import ProductRail from "../ProductRail/ProductRail";
// function BestSellerRail(/*{ category, start, end }*/) {
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   return (
//     <>
//     <div className="mb-20 mt-10 pt-8 pl-12 h-[560px] w-[70%] bg-linear-to-bl from-violet-200 to-fuchsia-200 " style={{borderTopRightRadius: "160px"}}>
//      <div className="w-full h-[560px] flex gap-2">
//       <h1 className="mt-12 font-bold text-slate-950 text-3xl">Special Sales</h1>
//        <ProductRail start={13} end={16}/>
//       </div>
//       </div>
//     </>

//   );
// }

// export default BestSellerRail;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductRail from "../ProductRail/ProductRail";

function BestSellerRail() {
  return (
    <div className="relative mt-20">
      {/* Background Section */}

<div
className="flex gap-0 items-center pl-10 h-[540px]
bg-gradient-to-r from-purple-200 to-fuchsia-200 "
style={{ borderTopRightRadius: "200px" }}
      >
        {/* Left Content */}
        <div className="w-[220px] h-[500px] flex flex-col justify-between gap-8">
          <h1 className="text-4xl text-left font-bold leading-tight">
            Special Sales
          </h1>

          <div>
            <p className="text-gray-600 mb-3 text-left">Remaining time</p>
            <div className="flex gap-3">
              <div className="bg-white px-4 py-2 rounded-md font-semibold">00</div>
              <div className="bg-white px-4 py-2 rounded-md font-semibold">00</div>
              <div className="bg-white px-4 py-2 rounded-md font-semibold">00</div>
            </div>
          </div>
        </div>

        {/* Product Slider */}
        <div className="absolute top-5 left-[360px] w-[900px]">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
          >
            <SwiperSlide>
              <ProductRail start={0} end={3} />
            </SwiperSlide>

            <SwiperSlide>
              <ProductRail start={3} end={6} />
            </SwiperSlide>

            <SwiperSlide>
              <ProductRail start={6} end={9} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BestSellerRail;