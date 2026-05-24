import './Home.css'
import Navbar from '../Header/Navbar'
import Hero from '../Header/Hero'
import ProductsCategory from '../ProductsCategory/ProductsCategory'
//import ProductsPage from './components/ProductsPage/ProductsPage'
import ProductRail from '../ProductRail/ProductRail'
import Banner from '../Banner/Banner'
import ImageBanner from '../ImageBanner/ImageBanner'
//import BestSellerRail from './components/BestSellerRail/BestSellerRail'
import OfferCard from '../OfferCard/OfferCard'
import Brands from '../Brands/Brands'
import BestSalesOfWeek from '../BestSalesOfWeek/BestSalesOfWeek'
import BlogsRail from '../BlogsRail/BlogsRail'
import Footer from '../Footer/Footer'
//import SignUp from './components/UserProfile/SignUp'

function Home() {

  return (
    <>
    <div className="root">
      <Navbar/>
      <Hero/>
      <div className="flex flex-col">
      <ProductsCategory/>
 
      <ProductRail category="New Arrivals" start={0} end={3}/>
      <Banner/>
      <ProductRail category="Best seller" start={5} end={8}/>
      <ImageBanner/>
      {/* <BestSellerRail/> */}
      <OfferCard/>
      <ProductRail category="Best seller" start={22} end={25}/>
      <Brands/>
      <BestSalesOfWeek start={30} end={33}/>
      <BlogsRail/>
      </div>
       </div>
      <Footer/>
   </>
  )
}

export default Home
