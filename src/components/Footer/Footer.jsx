import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Footer(){

    return(
        <div className=" bg-purple-100 w-min-full mb-0 flex justify-between p-10">
          <div className="flex flex-col justify-evenly">
            <h1 className="text-xl text-purple-800 font-semibold">Category</h1>
            <p className="text-lg text-purple-600">Dresses</p>
             <p className="text-lg text-purple-600">Tops & Tunics</p>
            <p className="text-lg text-purple-600">Kurtas & Kurtis</p>
             <p className="text-lg text-purple-600">Suits & Sets</p>
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="text-xl text-purple-800 font-semibold">Specials</h1>
             <p className="text-lg text-purple-600">Lehengas</p>
             <p className="text-lg text-purple-600">Gowns & Dresses</p>
             <p className="text-lg text-purple-600">Sarees</p>
             <p className="text-lg text-purple-600">Suits</p>

          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="text-xl text-purple-800 font-semibold">Quick Access</h1>
            <p className="text-lg text-purple-600">About Brand</p>
             <p className="text-lg text-purple-600">Store Locator</p>
             <p className="text-lg text-purple-600">Returns & Exchange</p>
             <p className="text-lg text-purple-600">Shipping & Delivery</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-x-1.5 justify-center">
                <TiSocialInstagramCircular className="text-purple-800 w-8 h-8"/>
                <TiSocialYoutubeCircular className="text-purple-800 w-8 h-8"/>
                <BsFacebook className="text-purple-800 w-7 h-7"/>
                <AiFillTwitterCircle className="text-purple-800 w-8 h-8"/>
            </div>
            <h1 className="text-xl text-purple-800 font-semibold">Follow Us on Social Media</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
             <p className="text-lg text-purple-600">We're available to answer your calls from 7am to 9pm daily.</p>
             <p className="text-lg text-purple-600">Call: +91 9999999990</p>
             <p className="text-lg text-purple-600">Email: support@example.com</p>
             </div>
          </div>
        </div>
    )
}

export default Footer;