import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import {ImCross} from "react-icons/im"
import "./loginsignup.css"
axios.defaults.withCredentials = true;
export const SignIn = () => {
  const navigate = useNavigate();
const [signindata, setSignindata] = useState({Username:"", Email:"", Password:"", ConfirmPassword:""});


const changeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setSignindata((data) => {
      return { ...signindata, [name]: value };
    });
}

const submitHandler = async (e) =>{
    e.preventDefault();
    const instance = await axios.create({
      withCredentials: true,
      headers: {authorization: "Bearer"}
    })
    instance.post("http://localhost:4000/api/v1/users/signup",signindata ).then((data)=>{
      navigate("/")
    }).catch((err)=>{
      console.log(err)
    })

  } 

  return (
    <>
    <div className="login__section">
    <div className='login__container'>
        <div className='login__off'>
            <button className='login__off__button'> <ImCross className="login__off__icon" /></button>
        </div>
          <h3 className='login__primary'>SIGNUP</h3>
          <form className='login__form'>

          <input onChange={(e)=> changeHandler(e)} name="Username" className='login__form__input' type="text" placeholder='Username' />

          <input type="email" onChange={(e)=> changeHandler(e)} name='Email' className='login__form__input' placeholder='Email' />

          <input type="password" onChange={(e)=> changeHandler(e)} name='Password' className='login__form__input' placeholder='Password' />

          <input type="password" onChange={(e)=> changeHandler(e)} name='ConfirmPassword' className='login__form__input' placeholder='Confirm Password' />

          <button onClick={submitHandler} className='login__submit'>SIGNUP</button>
          </form>
    </div>
    </div>

</>
  )
}









