import React, {useEffect, useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import axios from "axios"
import { useGlobalContext } from '../../StateManager/context';
const Navbar = () => {
  const [userActive, setUserActive] = useState(false);
  const {dispatch,Username } = useGlobalContext();
  const isMe = async()=>{
    const instance = await axios.create({
      withCredentials: true,
    })
    instance.get("http://localhost:4000/api/v1/users/isme").then((data)=>{
      setUserActive(true)
      
      const passingData = {Username: data?.data?.user?.Username,
                           Userid: data?.data?.user?._id,
                           Cart: data?.data?.user?.Cart
                          }
      dispatch({type: "UPDATE_USER", payload: passingData})
    }).catch((err)=>{
    })

  }

  useEffect(()=>{
    isMe();
  },[])



  return (
    <div className='navbar'>
    <div className='navbar__top'>
        <Link to="/"><li>HOME</li></Link>
        <Link to={'/store'}><li>SHOP</li></Link>
        { !userActive  ? <>
        <Link to={'/signup'}><li>SIGN UP</li></Link>
        <Link to={'/login'}><li>LOGIN</li></Link>
        </>:
        <>
        <Link><li>{Username?.toUpperCase()}</li></Link>
        <Link ><li>LOGOFF</li></Link>
        <Link to={"/cart"}><li>CART</li></Link>
        </>
        }
    </div>

    </div>
  )
}

export default Navbar