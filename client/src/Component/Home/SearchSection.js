import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Image/logo_transparent.png"
import { BsSearch } from 'react-icons/bs';
import {AiOutlineShoppingCart} from "react-icons/ai"

const SearchSection = () => {
  const navigate =useNavigate();


  
  return (
    <div className='navbar__bottom'>
    <div className='logo_container'>
        <img src={logo} alt="logo" />
    </div>
    <div className='search_container'>
        <input className='Search_tag' type="text" placeholder="Search in Saman" />
        <button className='search_icon_button'><BsSearch className="search_icon" /></button>
    </div>
    <div className='cart__container'>
    <button className='cart_icon_button'>
    <Link to={"/cart"}>
    <AiOutlineShoppingCart className="cart_icon" /></Link></button>
    </div>
    </div>
  )
}

export default SearchSection