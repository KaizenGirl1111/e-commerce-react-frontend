import heroLeft from '/assets/hero_left.jpg'
import heroRight from '/assets/hero_right.webp'
function Hero(){
return (
    <div className="flex gap-5 mt-2 mb-20">
            <img src={heroLeft} alt="empty" className=" rounded-lg flex-1 h-[400px] w-[400px]"/>
            <img src={heroRight} alt="empty" className="rounded-lg h-[400px] w-[400px]"/>
    </div>
)
}

export default Hero;