import React,{useState} from 'react'
import "./CartSection.css"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import {MdOutlineDelete} from "react-icons/md"
import {useGlobalContext} from "../../StateManager/context"
import axios from "axios"


const SingleCart =({data})=>{
    const [quantityState, setQuantityState] = useState(1);



    const deleteHandler = async(e) =>{
        console.log(data._id, "hello world")
        let CartId = data._id;
        e.preventDefault();
        const instance = await axios.create({
            withCredentials: true
          })
          instance.delete(`http://localhost:4000/api/v1/cart/delete/${CartId}`).then((data)=>{
            console.log(data)
          })

    }

    return<div className='single__cart'>
            <div className='single__cart__detail'>
                <img src={data?.productId?.image} />
                <h3 className='cartproduct__name'>{data?.productId?.name}</h3>
            </div>
            <div className='cartpriceContainer'>
                <h3 className='cartpriceContainer__price'>RS:{data.productId.price}</h3>
            </div>
            <div className='cartQuantity'>
            <div className='cartQuantityContainer'>
                <button><AiOutlineMinus /></button>
                <input type="Number" value={quantityState} min='1' max='5' placeholder="1" />
                <button><AiOutlinePlus /></button>
            </div>
            <button onClick={deleteHandler} className='cartQuantity__delete'><MdOutlineDelete className='cartQuantity__delete_icon'/> </button>
            </div>
          </div>
}
 
const CartSection = () => {
    const {dispatch, Cart} = useGlobalContext();

  return (
    <div  className='cartHeroSection'>
    <div className='cartHeroSection__container'>
            {   !!Cart.length &&
                Cart.map((data)=>{
                    return<SingleCart key={data.id} data={data}/>
                })

            }
    </div>
    <div className='checkoutSection'>
    <div className='checkoutSection__total'>
        <h2>Total</h2>
        <h3>Rs 130000</h3>
    </div>
        <button className='checkoutSection__button'>PROCEED TO CHECKOUT</button>
    </div>
    </div>
  )
}

export default CartSection