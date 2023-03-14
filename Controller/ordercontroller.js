const Order= require("../Schema/orderschema")   

const addOrder = async(req,res)=>{
    const {customername,address,city,state,country,pincode,mobile}=req.body
    console.log(req);
    // const orderExit=await Order.findOne({customername:customername})
    // if(customerExit)
    // {
    //     res.json("customer already Exit")
    // }
    // else
    // {
    const addorderList=await Order.create({
        customername,
        address,
        city,
        state,
        country,
        pincode,
        mobile
    })
    res.json({

        id:addorderList.id,
        customername:addorderList.customername,
        address:addorderList.address,
        city:addorderList.city,
        state:addorderList.state,
        country:addorderList.country,
        pincode:addorderList.pincode,
        mobile:addorderList.mobile
    })

}
module.exports= addOrder