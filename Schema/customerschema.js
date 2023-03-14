const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    customername:{type:String},
    email:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    country:{type:String},
    pincode:{type:Number}
})

const Customer = mongoose.model("customers",customerSchema)

module.exports = Customer