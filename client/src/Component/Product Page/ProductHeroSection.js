import React from 'react'
import "./ProductHeroSection.css"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import {BiLocationPlus} from "react-icons/bi"
import {BsCashCoin, BsShop} from "react-icons/bs"
import {CiDeliveryTruck} from "react-icons/ci"
import { Star } from '../../Utils/Star';
import axios from "axios"
import { useGlobalContext } from '../../StateManager/context';

const ProductHeroSection = ({productData}) => {
    const {dispatch} = useGlobalContext();
    const cartHandler = async(e)=>{
        const id =productData.id;
        if(id){
        const instance = await axios.create({
            withCredentials: true
          })

          const passingCart = {
                        productId: id,
                        quantity:1,
                        }

          instance.post("http://localhost:4000/api/v1/cart", passingCart).then((data)=>{
            console.log( data.data.data.Cart, "hellao")

            const UpdatedCart = data.data.data.Cart
            dispatch({type: "UPDATE__CART", payload: UpdatedCart})

        })
        }
    }



  return (
    <>
    <div className='ProductHeroSection'>
        <div className='ProductHeroSection_imageSection'>
            <img src={productData?.image} />
        </div>
        <div className='ProductHeroSection_detail'>
                <h4 className='product_name'>{productData?.name}</h4>
                {
                    <Star num={productData.stock} />
                }
                <h4 className='product_price'>RS: {productData?.price}</h4>
                <div className='inputtagNextPage'>
                    <span>Quantity:</span>
                    <div>
                    <button><AiOutlineMinus /></button>
                    <input type="Number" min='1' max='5' placeholder="1" />
                    <button><AiOutlinePlus /></button>
                    </div>
                </div>
                <div className='ProductHeroSection_button'>
                <button className='buy_button'>Buy Now</button>
                <button onClick={cartHandler} className='cart_button'>Add to Cart</button>
                </div>
        </div>
        <div className='ProductHeroSection__delivery'>
                <div className='ProductHeroSection__delivery__container'>
                    <h3>Delivery</h3>
                    <div className='ProductHeroSection__delivery__detail__one'>
                        <BiLocationPlus className='delivery_icon' />
                        <p>Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad</p>
                        <button>Change</button>
                    </div>
                    <div className='ProductHeroSection__delivery__detail__one'>
                        <CiDeliveryTruck className='delivery_icon' />
                        <p>Standard Delivery ( 4 -5 Days )</p>
                        <p>110</p>
                    </div>
                    <div className='ProductHeroSection__delivery__detail__one'>
                        <BsCashCoin className='delivery_icon' />
                        <p>Cash on delivery</p>
                    </div>
                    <div className='ProductHeroSection__delivery__detail__one'>
                        <BsShop className='delivery_icon' />
                        <p className='visit_shop'>Visit Store</p>
                    </div>
                </div>
        </div>
    </div>
    <div className='Product_description'>
        <h1 className='Product_description_primary'>Description</h1>
        <div className='Product_description__content'>
                <p>{productData.description}</p>
        </div>
    </div>
    </>

  )
}

export default ProductHeroSection