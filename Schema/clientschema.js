const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({
    clientname:{type:String},
    role:{type:String},
    email:{type:String},
    sign:{type:Boolean},
    contact:{type:String},
 
})

const User = mongoose.model("clients",clientSchema)

module.exports = User