const ReviewShop = require("../RouteModule/reviewShopModule");
const catchasynchandler = require("../middleware/CatchasyncError");

exports.getShopReviews = catchasynchandler(async(req,res)=>{
    let filter = {};
    if(req.params.ShopId) {shop: req.params.ShopId};
    const ReviewShopAll =await ReviewShop.find(filter);
    res.status(200).json({
        status: "success",
        results: ReviewAll.length,
        data:{
            ReviewShopAll
        }
    }) 
})

exports.createReviews = catchasynchandler(async(req,res)=>{
    if(!req.body.shop) req.body.shop = req.params.shopId;
    if(!req.body.user) req.body.user = req.user.id;
    const newReview = await ReviewShop.create(req.body);
    res.status(200).json({
        status: "success",
        results: newReview.length,
        data:{
            newReview
        }
    })
})

exports.deleteReview = catchasynchandler(async(req,res)=>{
    await ReviewShop.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message:"review deleted"
    })

})

exports.updateReview = catchasynchandler(async(req,res)=>{
    const UpdateReview = await ReviewShop.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    if(!Updatetour){
        res.status(401).json({
            status: "error"
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            UpdateReview
        }
      });
})