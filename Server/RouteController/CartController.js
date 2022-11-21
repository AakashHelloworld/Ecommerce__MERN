const CatchasyncError = require("../middleware/CatchasyncError");
const User = require("../RouteModule/userModule");
const ErrorHandler = require("../Utils/errorHander");


exports.createCart = CatchasyncError(async(req,res)=>{
    const userId = req.user.id;
    let duplicateChecker = false;
    if(userId){
        if(req.user.Cart.length){
        for(let i=0; i<req.user.Cart.length; i++){
            if(req.user.Cart[i].productId == req.body.productId){
                duplicateChecker = true
            }
        }
    } 
if(!duplicateChecker){
    const Cart = req.user.Cart.push(req.body)
    const updateData = await User.findByIdAndUpdate(userId,{...req.user, Cart},{
        new: true,
        runValidators: true
        })
        res.status(200).json({  
            status: 'success',
            data:updateData
          });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'No duplicate Create'
              });
        }}else{
            res.status(401).json({
                status: 'error',
                message: 'Create cart is not possible'
              });
        }
})

exports.getAllCart = CatchasyncError(async(req,res)=>{
    const userId = req.user.id;
    if(userId){
        const AllCart = req.user.Cart;
        res.status(200).json({
            message:'success',
            data:{
                AllCart
            }
        })
    }    
})

exports.updateCart = CatchasyncError(async(req,res)=>{
    const userId = req.user.id;
    const productId = req.body.productId;
    if(userId){
        const PromiseCart = req.user.Cart?.filter(async(data)=>
        {
                return (data.product != productId ) 
        })
        const filtercart = Promise.all(PromiseCart);
        const updateCart = filtercart.push(req.body)
        req.user.Cart = updateCart;
        res.status(200).json({
            message:'success',
            data:{
                updateCart 
            }
        })
    }else{
        res.status(401).json({
            status: 'error',
            message: 'Create cart is not possible'
          });
    }

    
})

exports.deleteCart = CatchasyncError(async(req,res)=>{
    const userId = req.user.id;
    const cartId = req.params.CartId;
    // console.log(cartId)
    if(userId){
        const Cart = req.user?.Cart?.filter((data)=>{
            return(data._id != cartId)
        })
        console.log(Cart, "hello owrld")

          const updateData = await User.findByIdAndUpdate(userId,{...req.user, Cart},{
        new: true,
        runValidators: true
        })

        console.log(updateData, "hellhhuhuio owrld")

        res.status(200).status({
            status:'success',
            message:"Deleted Cart!",
            data:{
                updateData
            }
        })
    }else{
        res.status(401).json({
            status: 'error',
            message: 'Create cart is not deleted!'
          });
    }
})