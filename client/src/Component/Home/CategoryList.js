import React from 'react'

const Category =({data})=>{
    return<div className='category'>
                <h3 className='category_secondary'>
                {data}
                </h3>
          </div>
}



const CategoryList = () => {
    const Categories = [
        "Fashion",
        "Mobile",
        "Laptop",
        "Cloths",
        "Shoes"
    ]
  return (
    <div className='categories_section'>
            <h3 className='category_primary'>Categories</h3>
            <div className='cateories'>
        {
            Categories.map((data)=>{
                return <Category  key={data} data={data}/>
            })
        }
        </div>
    </div>
  )
}

export default CategoryList