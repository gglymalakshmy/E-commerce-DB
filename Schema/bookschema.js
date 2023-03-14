const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    bookname:{type:String},
    authorname:{type:String},
    price:{type:Number},
    availability:{type:Boolean}
})

const User = mongoose.model("books",bookSchema)

module.exports = User