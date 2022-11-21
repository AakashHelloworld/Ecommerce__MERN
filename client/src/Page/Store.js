import React from 'react'
import Navbar from '../Component/Home/Navbar'
import SearchSection from '../Component/Home/SearchSection'
import ShopHeroSection from '../Component/StorePageComponent/ShopHeroSection'
import Review from "../Component/Product Page/Review"
import Footer from "../Component/Home/Footer"
const Store = () => {
  return (
    <>
    <div className='store__section'>
        <Navbar/>
        <SearchSection/>
        <ShopHeroSection/>
        <Review />
    </div>
    <Footer />
    </>
  )
}

export default Store