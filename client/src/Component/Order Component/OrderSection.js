import React from 'react'
import "./OrderSection.css"
import { BsCashCoin } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import {BiLocationPlus} from "react-icons/bi"
import { useGlobalContext } from '../../StateManager/context'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const SingleOrder =({data, quantity})=>{
    return<div className='single__cart'>
            <div className='single__cart__detail'>
                <img src={data?.image} />
                <h3 className='cartproduct__name'>{data?.name}</h3>
            </div>
            <div className='cartpriceContainer'>
                <h3 className='cartpriceContainer__price'>RS:{data?.price}</h3>
                <h3 className='single__cart__quantity'>Quantity: {quantity?quantity:""}</h3>
            </div>
          </div>
}

const OrderSection = () => {
    const {CartReadytoOrder} = useGlobalContext();
    const navigate = useNavigate();
    const finalOrder =async()=>{
        if(CartReadytoOrder?.amount && CartReadytoOrder.product?.length){
            let Ordered =[];
            CartReadytoOrder.product.foreach((data)=>{
                let item ={
                         productId: data.productId._id,
                         quantity:data.quantity
                        }
                Ordered.push(item)
                    }   
            )
            console.log(Ordered, "heelo worldwr")
            let passingArgument ={
                location: "Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad",
                amount:CartReadytoOrder?.amount,
                orderedItems: Ordered
            }
            const instance = await axios.create({
                withCredentials: true
            })
              instance.post(`http://localhost:4000/api/v1/order`,passingArgument).then((data)=>{
                console.log(data.data);
                navigate('/')
        })
        }}

  return (
    <div className='orderHeroSection'>
        <div className='orderHeroSection__container'>
                {   CartReadytoOrder?.product?.length &&
                    CartReadytoOrder?.product?.map((data)=>{
                        return <SingleOrder key={data?._id} data={data?.productId} quantity={data?.quantity} />
                    })
                }
        </div>
        <div className='checkoutSection'>
        <div className='order__delivery'>
                <div className='order__delivery__container'>
                    <h3>Delivery</h3>
                    <div className='order__delivery__detail__one'>
                        <BiLocationPlus className='delivery_icon' />
                        <p>Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad</p>
                        <button>Change</button>
                    </div>
                    <div className='order__delivery__detail__one'>
                        <TbTruckDelivery className='delivery_icon' />
                        <p>Standard Delivery ( 4 -5 Days )</p>
                        <p>110</p>
                    </div>
                    <div className='order__delivery__detail__one'>
                        <BsCashCoin className='delivery_icon' />
                        <p>Cash on delivery</p>
                    </div>
                </div>
        </div>
            <div className='checkoutSection__total'>
                <h2>Total</h2>
                <h3>Rs {CartReadytoOrder?.amount}</h3>
            </div>
        <button onClick={finalOrder} className='checkoutSection__button'>Place Order</button>
        </div>
    </div>
  )
}

export default OrderSection