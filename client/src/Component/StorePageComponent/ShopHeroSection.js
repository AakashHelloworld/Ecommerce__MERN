import React from 'react'
import "./ShopHeroSection.css"
import {GoVerified} from "react-icons/go"
import {AiFillStar} from "react-icons/ai"
import { Star } from '../../Utils/Star';

const SingleProduct = ({data}) =>{

    return<div className='single_product'>
            <div className='product_image'>
                <img src={data.image} />
            </div>
            <div className='product_detail'>
                <h2 className='product_name'>{data.name.length > 50 ? data.name.slice(0, 50) + "..." :data.name }</h2>
                <h3 className='product_price'>{`RS:${data.price}`}</h3>
                <Star num={data?.stock} />
            </div>
         </div>
}
const ShopHeroSection = () => {
    const data = {
        "_id": "637479f0014b5383bdc505d0",
        "name": "Everest Tech Shop",
        "description": "here you will get every latest technology",
        "__v": 0,
        "products": [
            {
                "_id": "6374fb15c48baa712535cdc6",
                "name": "HP 15S-DU3525TU Ci5-1135G7 8GB 1TB 15.6 HD W10 Natural Silver",
                "price": 121999,
                "description": "Product details of HP 15S-DU3525TU Ci5-1135G7 8GB 1TB 15.6 HD W10 Natural Silver",
                "stock": 5,
                "shop": {
                    "_id": "637479f0014b5383bdc505d0",
                    "name": "Everest Tech Shop",
                    "id": "637479f0014b5383bdc505d0"
                },
                "image": "https://static-01.daraz.pk/p/3284d34637b464651132fe1fa6be19d6.jpg",
                "category": "laptop",
                "__v": 0,
                "id": "6374fb15c48baa712535cdc6"
            },
            {
                "_id": "6374fb4fc48baa712535cdc8",
                "name": "HP Laptop 15s-du1520TU | Intel Celeron N4020 Dual Core Processor",
                "price": 59999,
                "description": "Product details of HP Laptop 15s-du1520TU | Intel Celeron N4020 Dual Core Processor",
                "stock": 5,
                "shop": {
                    "_id": "637479f0014b5383bdc505d0",
                    "name": "Everest Tech Shop",
                    "id": "637479f0014b5383bdc505d0"
                },
                "image": "https://static-01.daraz.pk/p/676479d37d415910ca7177f340d26be2.jpg",
                "category": "laptop",
                "__v": 0,
                "id": "6374fb4fc48baa712535cdc8"
            },
            {
                "_id": "6374fb95c48baa712535cdca",
                "name": "Daraz Like New Laptops - Lenovo Ideapad 3 Ultra Book Core i5 10th generation, 8GB DDR4 Ram, 256GB Solid State Drive SSD, 15.6 Led Display, Intel HD Graphics",
                "price": 79999,
                "description": "Product details of Daraz Like New Laptops - Lenovo Ideapad 3 Ultra Book Core i5 10th generation, 8GB DDR4 Ram, 256GB Solid",
                "stock": 5,
                "shop": {
                    "_id": "637479f0014b5383bdc505d0",
                    "name": "Everest Tech Shop",
                    "id": "637479f0014b5383bdc505d0"
                },
                "image": "https://static-01.daraz.pk/p/ea8c06f9a39da3311d905b7d314f5b4c.jpg",
                "category": "laptop",
                "__v": 0, 
                "id": "6374fb95c48baa712535cdca"
            },
            {
                "_id": "6374fbfec48baa712535cdcc",
                "name": "Dell Latitude 7490 Ultra Book, Core i7 8th generation, 8GB DDR Ram, 256GB Solid State Drive SSD, 14.1 FHD Led Display, Intel HD Graphics",
                "price": 74999,
                "description": "Product details of Daraz Like New Laptops - Dell Latitude 7490 Ultra Book, Core i7 8th generation, 8GB DDR Ram, 256GB Solid Sta",
                "stock": 5,
                "shop": {
                    "_id": "637479f0014b5383bdc505d0",
                    "name": "Everest Tech Shop",
                    "id": "637479f0014b5383bdc505d0"
                },
                "image": "https://static-01.daraz.pk/p/70b769ca4d0f8b3fa7e99cbd66af9bf9.jpg",
                "category": "laptop",
                "__v": 0,
                "id": "6374fbfec48baa712535cdcc"
            },
            {
                "_id": "6374fc3ac48baa712535cdd0",
                "name": "Lenovo - NOTE BOOK IDEA PAD 3 - CI3-1115G4 4GB - 1TB DOS 156.6 FHD - 1 year warranty",
                "price": 89999,
                "description": "Product details of Lenovo - NOTE BOOK IDEA PAD 3 - CI3-1115G4 4GB - 1TB DOS 156.6 FHD - 1 year warranty",
                "stock": 5,
                "shop": {
                    "_id": "637479f0014b5383bdc505d0",
                    "name": "Everest Tech Shop",
                    "id": "637479f0014b5383bdc505d0"
                },
                "image": "https://static-01.daraz.pk/p/70b769ca4d0f8b3fa7e99cbd66af9bf9.jpg",
                "category": "laptop",
                "__v": 0,
                "id": "6374fc3ac48baa712535cdd0"
            }
        ],
        "reviews": [],
        "id": "637479f0014b5383bdc505d0"
    }
  return (
    <>
    <div className='ShopHeroSection'>
        <div className='primary__ShopHeroSection'>
        <h3 className='shop_name'>{data.name} <span className='verified_container'>{<> <GoVerified className='verified_icon'/><span className='verified_text'>Verified</span></>}</span></h3>
        <p className='store__description'>{data.description}</p>
        <h4 className='store_average'>4<span>/5</span></h4>
        </div>
       <Star num={5} />
    </div>
    <div className='ShopProducts'>
    <h3 className='ShopProducts__primary'>Products</h3>
    <div className='ShopProducts__container'>
    {
        data?.products?.map((data)=>{

            return<SingleProduct data={data} />
        })
    }
    </div>
    <div className='load_more_container'>
            <button className='load_more_button'>LOAD MORE</button>
    </div>
    </div>
    </>
  )
}

export default ShopHeroSection