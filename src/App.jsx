import './App.css'
import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import ProductsCategory from './components/ProductsCategory/ProductsCategory'
import ProductsPage from './components/ProductsPage/ProductsPage'
import ProductRail from './components/ProductRail/ProductRail'
import Banner from './components/Banner/Banner'
import ImageBanner from './components/ImageBanner/ImageBanner'
import BestSellerRail from './components/BestSellerRail/BestSellerRail'
import OfferCard from './components/OfferCard/OfferCard'
import Brands from './components/Brands/Brands'
import BestSalesOfWeek from './components/BestSalesOfWeek/BestSalesOfWeek'
import BlogsRail from './components/BlogsRail/BlogsRail'
import Footer from './components/Footer/Footer'

function App() {

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

export default App
