import React from 'react'
import BannerImage from "../../Image/hero_image.PNG"
import "./Banner.css"

const Banner = () => {
  return (
  
    <div className='banner__section' style={{"backgroundImage":BannerImage}}>
        <div className='shop_now_container'>
            <button className='shop_now_button'>Shop Now</button>
        </div>
    </div>

  )
}

export default Banner