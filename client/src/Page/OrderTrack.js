import React from 'react'
import Navbar from '../Component/Home/Navbar'
import SearchSection from '../Component/Home/SearchSection'
import { GoPackage } from 'react-icons/go'
import {GiHelicopter} from "react-icons/gi"
import {SiHackthebox} from "react-icons/si"
import "./OrderTrack.css"
import {ImMan} from "react-icons/im"
import Footer from '../Component/Home/Footer'
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


const OrderTrack = () => {

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
    <>
    <Navbar />
    <SearchSection />
    <div className='order__track'>
        <div className='order__track_container'>
            <div style={{borderColor:'rgb(52 211 153)'}}>
                <GoPackage className='packaging_icon' />
                <h3 style={{color:'rgb(52 211 153)'}}>Packaging</h3>
            </div>
            <div>
                <GiHelicopter className='traveling_icon' />
                <h3>Traveling</h3>
            </div>
            <div>
                <SiHackthebox className='deliver_icon' />
                <h3>Delived</h3>
            </div>
            <div>
                <ImMan className="receive_icon" />
                <h3>Recieved</h3>
            </div>
        </div>
        <div className='orderHeroSection__container'>
                <h3 className='orderHeroSection__container__primary'>Total: Rs 300000</h3>
                <div>
                {
                    data.map((data)=>{
                        return <SingleOrder key={data.productName} data={data} />
                    })
                }
                </div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default OrderTrack