const bcrypt= require("bcrypt")
const User= require("../Schema/testschema")
const jwt = require("jsonwebtoken")

const generateToken=(id)=>{
    return jwt.sign({id},"glyma123",{expiresIn:"1d"})
}
const signUp = async(req,res)=>{
    const {email,name,password}=req.body
    console.log(req);
    const salt=await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt)
    console.log(hashedPassword);
    const userExit=await User.findOne({email:email})
    if(userExit)
    {
        res.json("Email already Exit")
    }
    else
    {
    const userSignUp=await User.create({
    name,
    email,
    password:hashedPassword
    })
    res.json({
        id:userSignUp.id,
        name:userSignUp.name,
        email:userSignUp.email,
        token:generateToken(userSignUp.id)

    })
    }
}
const login = async(req,res)=>{

    const {email,password}= req.body
    if(!email ||!password){
        {
            res.json("Error")
        }
    }
     else{
    const {email}= req.body
    const  userOne =await User.findOne({email:email})
   // console.log(userOne.password,"hashed....");
    //console.log(password,"password...");
    if(userOne && await bcrypt.compare(password,userOne.password))
    {
        // res.json("Login Success")
        res.json({
            id:userOne.id,
            email:userOne.email,
            message:"Login Success",
            token:generateToken(userOne.id)
        })
    }
    else
    { 
        // res.json("Failed")
        res.json({
            message:"Login Failed",
            isError:true
        })
    }    
    }
}
module.exports= {signUp,login}