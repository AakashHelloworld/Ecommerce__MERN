const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    review:{
        type: String,
        required: [true, 'review must have review string']
    },
    rating:{
        type: Number,
        min:1,
        max:5
    },
    product:{
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required:[true, 'review must be belong to product']
        },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'review must belong to product']
    }
},
{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}
)

reviewSchema.pre(/^find/, function(next){
    this.populate({
        path: 'user',
        select: 'Username'
    })
    next();
})  


const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;