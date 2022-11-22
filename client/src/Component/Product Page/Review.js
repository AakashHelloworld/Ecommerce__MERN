import React, {useState} from 'react'
import "./Review.css"
import {AiFillStar} from "react-icons/ai"
import StarRatingComponent from 'react-star-rating-component';
import {MdOutlineDelete} from "react-icons/md";
import axios from "axios"
import { useGlobalContext } from '../../StateManager/context';
const Star =({num})=>{
    if(num == 1){
        return <div className='review_primary_icons'><AiFillStar className='review_primary_icon'/></div>

    }else if(num == 2){
        return<div className='review_primary_icons'><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/></div>

    }else if(num ==3){
        return <div className='review_primary_icons'><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/></div>

    }else if(num ==4){
        return <div className='review_primary_icons'><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/></div>

    }else if(num==5){
        return <div className='review_primary_icons'><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/><AiFillStar className='review_primary_icon'/></div>

    }
}





const SingleReview = ({data}) =>{

    const reviewDeleteHandler = async() =>{
        const instance = await axios.create({
            withCredentials: true
        })
          instance.delete(`http://localhost:4000/api/v1/reviews/delete/${data._id}`).then((data)=>{
            console.log(data)
          });
    }

    const {Userid} = useGlobalContext();
    return<div className='singleReview'>
    <div className='singleReviewname_delete'>
                <h3 className='singleReview__primary'>{data?.user?.Username}</h3>

                { (Userid == data?.user?._id) &&
                <button onClick={reviewDeleteHandler} className='review__delete'><MdOutlineDelete className='review__delete_icon'/> </button>
                }
    </div>
                {
                    <Star num={data?.rating} />
                }
                <h3 className='singleReview__secondary'>{data?.review}</h3>
          </div>
}

const Review = ({review, productid, shopid}) => {
    const [createReviewData , setCreateReviewData ] = useState({review:"", rating:5,});


                                            
    
    const changeHandler =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setCreateReviewData((data)=>{ return{...createReviewData, [name]:value}})
    }        
    const reviewChangeHandler =(next,prev,name) =>{
        setCreateReviewData((data)=> {return{...createReviewData, [name]:next}})
    }                                                  

    const submitHandler = async(e)=>{
        e.preventDefault();
        const instance = await axios.create({
            withCredentials: true
          })
          if(productid){
          instance.post(`http://localhost:4000/api/v1/products/${productid}/reviews`, createReviewData).then((data)=>{
            console.log(data, "hello world")
          });
        }
        if(shopid){
            instance.post(`http://localhost:4000/api/v1/reviews/${shopid}`,createReviewData ).then((data)=>{
                console.log(data)
              });
        }
    }
  return (
    <div className='review__section'>
            <h3 className='review__section__primary'>Reviews</h3>
            <div className='review__section__container'>
            <div className='average_review'>
                    <h3 className='average_rating'>4<span>/5</span></h3>
                    {
                        <Star num={5} />

                    }
                    <p className='average_no_rating'>131 Ratings</p>
            </div>
            <div className='create_review'> 
                    <input value={createReviewData.review} name="review" type="text" onChange={(e)=> changeHandler(e)} placeholder="Review" className='review_inputtag' />
                    <StarRatingComponent
                        name="rating"
                        value={createReviewData.rating}
                        starColor={"#faca51"}
                        className="create_icon"
                        onStarClick={reviewChangeHandler}
                     />
                     <button className='review__submit' onClick={submitHandler}>Submit</button>
            </div>
            </div>
            <div className='all_reviews'>  
                    { !!review.length ?
                        review.map((data)=>
                        {
                            return <SingleReview key={data.id} data={data} />
                        }) : <h3 className='noreview'>No Review</h3>
                    }
                    <div className='review_load_container'>
                        <button>LOAD MORE</button>
                    </div>
            </div>
    </div>
  )
}

export default Review