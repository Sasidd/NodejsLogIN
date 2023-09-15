const Users = require('../Models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendCookies = require('../Utils/feature')


const getAllUser =  (req, res) => {
    res.json({
      success: true,
      user: [],
    });
} 

const addNew = async (req, res) => {
    const { name, email, password } = req.body;
    await Users.create({name, email, password});
    res.status(201).cookie('Token', 'This is Token').json({
      success: true,
      message: 'Registered Successfully',
    });
    console.log(req.query);
  }

const getUser =  async (req, res) => {
    const { id } = req.query;
    console.log(req.query);
    console.log(id);
    if(!id){
     return res.status(404).json({
        success:false,
        message:'there is no such ID'
      })
    }
    const user = await Users.findById(id);
    res.status(200).cookie('Token', 'This is Token Third').json({
      success: true,
      User: user
    });
  }

const editUser = (req, res) => {
    res.json({
      success: true,
      message:"It is edited"
    });
} 

const register= async (req,res)=>{
const {name,email,password}=req.body
let user = await Users.findOne({email})
if(user){
   return res.status(404).json({
        success : false,
        message : "User already exist"
    })
}
const hashPwd = await bcrypt.hash(password,10)
Users.create({name,email,password:hashPwd})
//sendCookies(userFinal,res,"Registration successfull !",200)
res.status(200).json({
success:true,
message:'Registered Successfully'
})
}

const login= async (req,res)=>{
    const {email,password}=req.body
    let user = await Users.findOne({email}).select("+password")
    if(!user){
       return res.status(404).json({
            success : false,
            message : "Please Register First"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(404).json({
            success : false,
            message : "Enter Correct Password"
        })
    }
    sendCookies(user,res,`Welcome ${user.name}`,200)
    }

    const getMyProfile= async (req,res)=>{
        res.status(200).json({
            success:true,
            message:req.user
        })
        }

const logout=async(req,res)=>{
  res.status(200).cookie('Token','',{
    expires:new Date(Date.now())
  }).json({
    success:true,
    message:'IT has been logout'
  })
  console.log(req.cookies.Token)
}
  module.exports = {
    getAllUser,
    addNew,
    getUser,
    editUser,
    register,
    login,
    getMyProfile,
    logout
  };