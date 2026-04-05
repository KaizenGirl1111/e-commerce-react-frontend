import offerImg from "/assets/folded-purple-clothes-and-percent-sign-on-store-counter-retail-display-fashion-sale-shopping-boutique-free-video.jpg"
function OfferCard(){

    return (
        <div className="w-full h-[200px] flex justify-between mb-20 mt-20" >
          <div className="flex flex-col w-[48%]">
          <img src={offerImg} className=" relative w-full h-[250px] rounded-lg z-0"/>
          <h1 className="absolute ml-2 mt-15 text-4xl font-bold text-white z-1 text-shadow-black">Black Friday offer</h1>
          </div>
          <div className="flex flex-col w-[48%]">
          <img src={offerImg} className=" relative w-full h-[250px] rounded-lg z-0"/>
          <h1 className="absolute ml-2 mt-15 text-4xl font-bold text-white z-1 text-shadow-black">Black Friday offer</h1>
          </div>
        </div>
    )
}

export default OfferCard