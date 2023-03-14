const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    salename:{type:String},
    orderdate:{type:Date},
    productname:{type:String},
    price:{type:Number},
    orderquantity:{type:Number},
})

const User = mongoose.model("sales",bookSchema)

module.exports = User