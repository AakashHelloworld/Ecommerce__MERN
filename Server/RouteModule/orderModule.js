const mongoose = require("mongoose");

const orderModule = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:[true, "cart product must have user"]
    },
    product:{
        type:mongoose.Schema.ObjectId,
        required:[true, "cart product must have product"]
    },
    quantity:{
        type:Number,
        required:[true, "cart have atleast one item"]
    },
    created: {
        type: Date,
        default: Date.now()
    },
    completed:{
        type:Boolean,
        default: false
    }
},
{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}
)

orderModule.pre(/^find/, function(next){
    this.populate({
        path: 'user',
        select: 'Username Email',
    }).populate({
        path: 'product',
        select: 'name price shop'
    })
});


const Order = mongoose.model('Order', orderModule)
// console.log(Product);
module.exports = Order;