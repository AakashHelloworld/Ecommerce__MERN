import React,{useState, useEffect} from 'react'
import Footer from '../Component/Home/Footer'
import Navbar from '../Component/Home/Navbar'
import SearchSection from '../Component/Home/SearchSection'
import "./OrderTrack.css"
import axios from "axios"
const Orders = () => {
    const [orders, setOrders]=  useState([]);

    const fetchmyOrders =async()=>{
        const instance = await axios.create({
            withCredentials: true
        })
          instance.get(`http://localhost:4000/api/v1/order`).then((data)=>{
            console.log(data.data);
    })
    }

        useEffect(()=>{
            fetchmyOrders();
            console.log("hey")
        },[])


        const data = [
            {
                id:23432231,
                amount:12000,
                date: Date.now(),
            },{
                id:2233434,
                amount:120000,
                date:Date.now(),
            },
            {
                id:2233434,
                amount:120000,
                date:Date.now(),
            },
            {
                id:2233434,
                amount:120000,
                date:Date.now(),
            },
            {
                id:2233434,
                amount:120000,
                date:Date.now(),
            }
        ]
  return (
    <>
        <Navbar />
        <SearchSection/>
        <div className='all_orders'>
        {
            data.map((data)=>{
                return(
                    <div className='single_order_item'>
                        <h3>Order Number: {data.id}</h3>
                        <h2 className='order_amount_primary'>Amount: <span> {data.amount}</span></h2>
                        <h2 className='order_date_primary'>Date: <span>{data.date}</span></h2>
                    </div>
                )
            })
        }
        </div>
        <Footer/>
    </>
  )
}

export default Orders