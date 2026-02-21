import heroLeft from '../assets/hero_left.png'
import reactLogo from "/assets/react.svg"
function Hero(){
return (
    <div className="flex">
         <img src={reactLogo} alt="empty"/>
            <img src={heroLeft} alt="empty"/>
    </div>
)
}

export default Hero;