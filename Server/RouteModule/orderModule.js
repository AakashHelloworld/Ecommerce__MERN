const mongoose = require("mongoose");

const orderModule = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:[true, "cart product must have user"]
    },
    orderedItems:Array,
    location:{
            type: "string",
            required: [true, "a location must be there"]
    },
    created: {
        type: Date,
        default: Date.now()
    },
    packaging:{
        type: Boolean,
        default: false
    },
    traveling:{
        type: Boolean,
        default: false
    },
    delivered:{
        type: Boolean,
        default: false
    },
    received:{
        type: Boolean,
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