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
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="flex flex-col">
      <ProductsCategory/>
 
      <ProductRail category="New Arrivals" start={0} end={3}/>
      <Banner/>
      <ProductRail category="Best seller" start={5} end={8}/>
      <ImageBanner/>
      <BestSellerRail/>
      <OfferCard/>
      <ProductRail category="Best seller" start={22} end={25}/>
      <Brands/>
      </div>
    </>
  )
}

export default App
