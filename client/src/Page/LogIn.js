import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { ImCross } from 'react-icons/im'
export const LogIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
                                          Email:"",
                                          Password:""
  })
  const changeHandler=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((data) => {
      return { ...loginData, [name]: value };
    });

  }

  const loginHandler = async(e)=>{
    e.preventDefault();
    const instance = await axios.create({
      withCredentials: true
    })
    instance.post("http://localhost:4000/api/v1/users/login",loginData ).then((data)=>{
      console.log(data)
      navigate("/");
    })
  }

  return (
   
    <div className="login__section">
    <div className='login__container'>
        <div className='login__off'>
            <button className='login__off__button'> <ImCross className="login__off__icon" /></button>
        </div>
          <h3 className='login__primary'>LOGIN</h3>
          <form className='login__form'>

          <input type="email" onChange={(e)=> changeHandler(e)} name='Email' className='login__form__input' placeholder='Email' />

          <input type="password" onChange={(e)=> changeHandler(e)} name='Password' className='login__form__input' placeholder='Password' />

          <button onClick={loginHandler} className='login__submit'>LOGIN</button>
          </form>
    </div>
    </div>
  )
}
