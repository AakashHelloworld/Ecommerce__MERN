import React from 'react';
import {AiFillStar} from "react-icons/ai";

const SingleProduct = ({data}) =>{
    const star =(num)=>{
        if(num == 1){
            return <div className='product_icons'><AiFillStar className='product_icon'/></div>
    
        }else if(num == 2){
            return<div className='product_icons'><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/></div>
    
        }else if(num ==3){
            return <div className='product_icons'><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/></div>
    
        }else if(num ==4){
            return <div className='product_icons'><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/></div>
    
        }else if(num==5){
            return <div className='product_icons'><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/><AiFillStar className='product_icon'/></div>
    
        }
    }
    return<div className='single_product'>
            <div className='product_image'>
                <img src={data.image} />
            </div>
            <div className='product_detail'>
                <h2 className='product_name'>{data.name.length > 50 ? data.name.slice(0, 50) + "..." :data.name }</h2>
                <h3 className='product_price'>{`RS:${data.price}`}</h3>
                {
                    star(data?.stock)
                }
            </div>
         </div>
}
const Products = () => {
    const products = [{
        "_id": "6374f8edc48baa712535cdb6",
        "name": "Redmi Note 11 (6GB+128GB) PTA Approved. 1 Year Brand Warranty with Mobile Phone",
        "price": 43999,
        "description": "Product details of Redmi Note 11 (6GB+128GB) PTA Approved. 1 Year Brand Warranty with Mobile Phone",
        "stock": 5,
        "shop": {
            "_id": "6371b584e024cccbab335520",
            "name": "Burao dokan",
            "id": "6371b584e024cccbab335520"
        },
        "image": "https://static-01.daraz.pk/p/97c6cb2d0c952d1e181484c0c9b2ab90.jpg",
        "category": "mobile",
        "id": "6374f8edc48baa7125y35cdb6"
    },
    {
        "_id": "6374f98fc48baa712535cdb8",
        "name": "Tecno CAMON 19 NEO 128GB ROM + 6GB RAM , Rear Camera 48MP. 1 Year Brand Warranty with Mobile Phone",
        "price": 367999,
        "description": "Product details of Tecno CAMON 19 NEO 128GB ROM + 6GB RAM , Rear Camera 48MP. 1 Year Brand Warranty with Mobile Phone",
        "stock": 5,
        "shop": {
            "_id": "637479f0014b5383bdc505d0",
            "name": "Everest Tech Shop",
            "id": "637479f0014b5383bdc505d0"
        },
        "image": "https://static-01.daraz.pk/p/12ec4379143f462f86fd2611bd88a4a2.jpg",
        "category": "mobile",
        "id": "6374f98fyc48baa712535cdb8"
    },
    {
        "_id": "6374f9fdc48baa712535cdba",
        "name": "Realme C25Y 4-64GB 18W Quick Charge 5000 mAH Battery .1 Year Brand Warranty with Mobile Phone",
        "price": 29999,
        "description": "Product details of Tecno CAMON 19 NEO 128GB ROM + 6GB RAM , Rear Camera 48MP. 1 Year Brand Warranty with Mobile Phone",
        "stock": 5,
        "shop": {
            "_id": "637479f0014b5383bdc505d0",
            "name": "Everest Tech Shop",
            "id": "637479f0014b5383bdc505d0"
        },
        "image": "https://static-01.daraz.pk/p/833c6c3efb5f26f081d34e9d7ce5ff9f.jpg",
        "category": "mobile",
        "id": "6y374f9fdc48baa712535cdba"
    },
    {
        "_id": "6374fa60c48baa712535cdbe",
        "name": "Realme 9 4G 8GB RAM + 128GB ROM. Snapdragon 680 Processor. 1 Year Brand Warranty with Mobile Phone",
        "price": 63199,
        "description": "Product details of Realme 9 4G 8GB RAM + 128GB ROM. Snapdragon 680 Processor. 1 Year Brand Warranty with Mobile Phone",
        "stock": 5,
        "shop": {
            "_id": "637479f0014b5383bdc505d0",
            "name": "Everest Tech Shop",
            "id": "637479f0014b5383bdc505d0"
        },
        "image": "https://static-01.daraz.pk/p/f35aed348a44f5c5a11021958ad6c5e2.jpg",
        "category": "mobile",
        "id": "6374fay60c48baa712535cdbe"
    },
    {
        "_id": "6374fac1c48baa712535cdc2",
        "name": "Samsung Galaxy A33 5 G RAM 8 GB 128 GB Camera Front 13 MP Back 48 MP",
        "price": 80500,
        "description": "Product details of Realme 9 4G 8GB RAM + 128GB ROM. Snapdragon 680 Processor. 1 Year Brand Warranty with Mobile Phone",
        "stock": 5,
        "shop": {
            "_id": "637479f0014b5383bdc505d0",
            "name": "Everest Tech Shop",
            "id": "637479f0014b5383bdc505d0"
        },
        "image": "https://static-01.daraz.pk/p/f35aed348a44f5c5a11021958ad6c5e2.jpg",
        "category": "mobile",
        "id": "6374fac1c48baa7y12535cdc2"
    },
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
        "id": "6374yfb15c48baa712535cdc6"
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
        "id": "6374fb4fc4y8baa712535cdc8"
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
        "id": "6374fb95c48baa71253y5cdca"
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
        "id": "6374fbfec48ybaa712535cdcc"
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
        "id": "6374fc3ac48baa712535cdyd0"
    }]

  return (
    <div className='home_products'>
    <h3 className='BestProduct_primary'>Products</h3>
    <div className='home_products_container'>
            {
                products.map((data)=>{
                    return <SingleProduct key={data.id} data={data}/>
                })

            }
    </div>
    <div className='load_more_container'>
            <button className='load_more_button'>LOAD MORE</button>
    </div>
    </div>)
}

export default Products