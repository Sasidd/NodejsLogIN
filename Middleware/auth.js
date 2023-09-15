const jwt=require('jsonwebtoken')
const Users = require('../Models/user')


const isAuth=async(req,res,next)=>{
const Token = req.cookies.Token
console.log(Token);
if(!Token){
return res.status(404).json({
success : false,
message : "Login First"
}) 
}
const decodedData = jwt.verify(Token,"dfdfsdfsdfadgfsadfa")
req.user = await Users.findById(decodedData._id)
next()
}


module.exports=isAuth