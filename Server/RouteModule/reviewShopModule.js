const mongoose = require('mongoose');


const reviewShopSchema = new mongoose.Schema({
    review:{
        type: String,
        required: [true, 'review must have review string']
    },
    rating:{
        type: Number,
        min:1,
        max:5
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'review must belong to product']
    },
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shop',
        required: [true, "shop Id must be there"]
    }
},
{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});


reviewShopSchema.pre(/^find/, function(next){
    this.populate({
        path:'user',
        select: 'name'
    })
    next();
})


const ReviewShop = mongoose.model('ReviewShop', reviewShopSchema)

module.exports = ReviewShop