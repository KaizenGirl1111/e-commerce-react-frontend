import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import heroLeft from '/assets/hero_left.png'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import ProductsCategory from './components/ProductsCategory/ProductsCategory'
import ProductsPage from './components/ProductsPage/ProductsPage'
import ProductRail from './components/ProductRail/ProductRail'
import Banner from './components/Banner/Banner'
import ImageBanner from './components/ImageBanner/ImageBanner'
import BestSellerRail from './components/BestSellerRail/BestSellerRail'
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
      </div>
    </>
  )
}

export default App
