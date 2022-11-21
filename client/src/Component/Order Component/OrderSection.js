import React from 'react'
import "./OrderSection.css"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const SingleOrder =({data})=>{
    return<div className='single__cart'>
            <div className='single__cart__detail'>
                <img src={data.image} />
                <h3 className='cartproduct__name'>{data.productName}</h3>
            </div>
            <div className='cartpriceContainer'>
                <h3 className='cartpriceContainer__price'>RS:{data.price}</h3>
                <h3 className='single__cart__quantity'>Quantity: {data.quantity}</h3>
            </div>
          </div>
}

const OrderSection = () => {
    const data =[
        {
            productName: "Redmi Note 11 (6GB+128GB) PTA Approved. 1 Year Brand Warranty with Mobile Phone",
            price: 40000,
            quantity:1,
            image: "https://static-01.daraz.pk/p/97c6cb2d0c952d1e181484c0c9b2ab90.jpg"
        },
        {
            productName: "aRedmi Note 11 (6GB+128GB) PTA Approved. 1 Year Brand Warranty with Mobile Phone",
            price: 2000,
            quantity:3,
            image: "https://static-01.daraz.pk/p/97c6cb2d0c952d1e181484c0c9b2ab90.jpg"

        },
        {
            productName: "fRedmi Note 11 (6GB+128GB) PTA Approved. 1 Year Brand Warranty with Mobile Phone",
            price: 3000,
            quantity:2,
            image: "https://static-01.daraz.pk/p/97c6cb2d0c952d1e181484c0c9b2ab90.jpg"
        },
        {
            productName: "yRedmi Note 11 (6GB+128GB) PTA Approved. 1 Year Brand Warranty with Mobile Phone",
            price: 1,
            quantity:4,
            image: "https://static-01.daraz.pk/p/97c6cb2d0c952d1e181484c0c9b2ab90.jpg"
        }
    ]


  return (
    <div className='orderHeroSection'>
        <div className='orderHeroSection__container'>
                {
                    data.map((data)=>{
                        return <SingleOrder key={data.productName} data={data} />
                    })
                }
        </div>
        <div className='checkoutSection'>
 
            <div className='checkoutSection__total'>
                <h2>Total</h2>
                <h3>Rs 130000</h3>
            </div>
        <button className='checkoutSection__button'>Place Order</button>
        </div>
    </div>
  )
}

export default OrderSection