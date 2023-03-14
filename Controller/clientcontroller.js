const User= require("../Schema/clientschema")

const addclientLists = async(req,res)=>{
    const {clientname,role,email,sign,contact}=req.body
    console.log(req);
    const clientExit=await User.findOne({clientname:clientname})
    if(clientExit)
    {
        res.json("client already Exit")
    }
    else
    {
    const addClientlist=await User.create({
        clientname,
        role,
        email,
        sign,
        contact
    })
    res.json({

        id:addClientlist.id,
        clientname:addClientlist.clientname,
        role:addClientlist.role,
        email:addClientlist.email,
        sign:addClientlist.sign,
        contact:addClientlist.contact
    })
    }
}
const getallClients = async(req,res)=>{
    const  clientlists =await User.find({})
        res.json(clientlists)
    
    }

module.exports= {addclientLists,getallClients}