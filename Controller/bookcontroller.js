const User= require("../Schema/bookschema")

const addbookLists = async(req,res)=>{
    const {bookname,authorname,price,availability}=req.body
    console.log(req);
    const bookExit=await User.findOne({bookname:bookname})
    if(bookExit)
    {
        res.json("Book already Exit")
    }
    else
    {
    const addBooklist=await User.create({
    bookname,
    authorname,
    price,
    availability
    })
    res.json({
        id:addBooklist.id,
        bookname:addBooklist.bookname,
        authorname:addBooklist.authorname,
        price:addBooklist.price,
        availability:addBooklist.availability
    })
    }
}
const getallBooks = async(req,res)=>{
    const  booklists =await User.find({})
        res.json(booklists)
    
    }

const updateBook =async(req,res)=>{

    const {bookname,authorname,price,availability} = req.body
    const _id = req.body
    //const _id = req.params.up

    const updatedBook = await User.findByIdAndUpdate(_id,{
        bookname,
        authorname,
        price,
        availability
    })

    res.json(updatedBook)
}
const deleteBook =async(req,res)=>{

    const _id = req.params.del

    const deletedBook = await User.findByIdAndDelete(_id)

    res.json(deletedBook)
}

module.exports= {addbookLists,getallBooks,updateBook,deleteBook}