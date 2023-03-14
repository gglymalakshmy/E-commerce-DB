const Customer= require("../Schema/customerschema")   

const addcustomerLists = async(req,res)=>{
    const {customername,email,address,city,state,country,pincode}=req.body
    console.log(req);
    const customerExit=await Customer.findOne({customername:customername})
    if(customerExit)
    {
        res.json("customer already Exit")
    }
    else
    {
    const addcustomerList=await Customer.create({
        customername,
        email,
        address,
        city,
        state,
        country,
        pincode
    })
    res.json({

        id:addcustomerList.id,
        customername:addcustomerList.customername,
        email:addcustomerList.email,
        address:addcustomerList.address,
        city:addcustomerList.city,
        state:addcustomerList.state,
        country:addcustomerList.country,
        pincode:addcustomerList.pincode,
    })
    }
}
const getallCustomers = async(req,res)=>{
    const  customerlists =await Customer.find({})
        res.json(customerlists)
    
    }


    const updateCustomer =async(req,res)=>{

        const {customername,email,address,city,state,country,pincode} = req.body
        const _id = req.body
        //const _id = req.params.up
    
        const updatedCustomer = await Customer.findByIdAndUpdate(_id,{
            customername,
            email,
            address,
            city,
            state,
            country,
            pincode
    
        })
    
        res.json(updatedCustomer)
    }
    const deleteCustomer =async(req,res)=>{
    
        const _id = req.params.del
    
        const deletedCustomer = await Customer.findByIdAndDelete(_id)
    
        res.json(deletedCustomer)
    }

module.exports= {addcustomerLists ,getallCustomers,updateCustomer,deleteCustomer}