const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    customername:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    country:{type:String},
    pincode:{type:Number},
    mobile:{type:Number}
})

const Order = mongoose.model("order",orderSchema)

module.exports = Order