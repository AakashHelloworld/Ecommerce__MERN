const Order = require("../RouteModule/orderModule");
const APIFeatures = require("../Utils/appFeatures");
const catchasynchandler = require("../middleware/CatchasyncError");
const Product = require("../RouteModule/productsModule");

exports.getAllOrders = catchasynchandler(async(req,res)=>{
    const AllOrder = await Order.find();
    res.status(200).json({
        status: 'success',
        results: AllOrder.length,
        data: {
            AllOrder 
        }
    })
})


exports.createOrder = catchasynchandler(async(req,res)=>{
    const userId = req.user.id;
    const orderBody = req.body;
    if(userId){
        const Order = {...orderBody, user:userId};
        const createOrder = await Order.create(Order);
        res.status(200).json({
            statu:"success",
            data:{
                createOrder
            }
        })
    }else{
        res.status(400).status({
            status:'error',
            message: "something wrong from server, authentication problem"
        })
    }
})

exports.updateOrder = catchasynchandler(async(req,res)=>{
        const UpdateOrder = await Order.findByIdAndUpdate(req.params.orderId, req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status: 'success',
            data: {
                UpdateOrder
            }
          });
})

exports.deleteOrder = catchasynchandler(async(req,res)=>{
    await Order.findByIdAndDelete(req.params.orderId);
    res.status(200).json({
      status: "success",
      message:"tour deleted"
    })
})