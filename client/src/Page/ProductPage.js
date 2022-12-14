import React,{useState, useEffect} from 'react'
import Footer from '../Component/Home/Footer'
import Navbar from '../Component/Home/Navbar'
import SearchSection from '../Component/Home/SearchSection'
import ProductHeroSection from '../Component/Product Page/ProductHeroSection'
import ProductSameStore from '../Component/Product Page/ProductSameStore'
import Review from '../Component/Product Page/Review'
import axios from 'axios';
import {useLocation} from "react-router-dom";
const ProductPage = () => {
  const [productData, setProductData] = useState({})
  const [similarShopProducts, setSimilarShopProducts] = useState([]);

  const location = useLocation().pathname.split('/')[2];

  useEffect(() => {
    const data = axios.get(`http://localhost:4000/api/v1/products/${location}`).then((data)=>{
    setProductData(data.data.data.product)
  }).catch((err)=>{
    console.log(err)
  })
  }, [])

  useEffect(()=>{
    if(productData.id && productData.shop.id){
    const data = axios.get(`http://localhost:4000/api/v1/shops/${productData.shop.id}`).then((data)=>{
      setSimilarShopProducts(data?.data?.data?.shop?.products)

  }).catch((err)=>{
        console.log(err)
      })
    }

  }, [productData?.id,productData?.shop?.id ])
   



  return (
    <>
    <div className='ProductPage_section'>
      <Navbar/>
      <SearchSection/>
      <ProductHeroSection productData={productData} />
      <Review review={productData?.reviews?.length ? productData?.reviews : []} productid={productData?.id}/>
      <ProductSameStore data={similarShopProducts || []} />
    </div>
    <Footer/>
    </>
  )
}

export default ProductPage