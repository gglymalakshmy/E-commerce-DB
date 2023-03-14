const User= require("../Schema/saleschema")

const addsalesLists = async(req,res)=>{

    const {salename,orderdate,productname,price,orderquantity}=req.body
    console.log(req);
    const saleExit=await User.findOne({salename:salename})
    if(saleExit)
    {
        res.json("Sale already Exit")
    }
    else
    {
    const addSalelist=await User.create({
        salename,
        orderdate,
        productname,
        price,
        orderquantity
    })
    res.json({
        id:addSalelist.id,
        customername:addSalelist.customername,
        orderdate:addSalelist.orderdate,
        productname:addSalelist.productname,
        price:addSalelist.price,
        orderquantity:addSalelist.orderquantity
    })
    }
}
const getallSales = async(req,res)=>{
    const  salelists =await User.find({})
        res.json(salelists)
    
    }

const updateSale =async(req,res)=>{

    const {customername,orderdate,productname,price,orderquantity} = req.body
    const _id = req.body


    const updatedSale = await User.findByIdAndUpdate(_id,{
     customername,
        orderdate,
        productname,
        price,
        orderquantity
 })
     res.json(updatedSale)
}
const deleteSale =async(req,res)=>{

    const _id = req.params.del

     const deletedSale = await User.findByIdAndDelete(_id)

   res.json(deletedSale)
}

module.exports= {addsalesLists, getallSales, updateSale,deleteSale}