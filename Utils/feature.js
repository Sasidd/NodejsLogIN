const jwt = require('jsonwebtoken')

const sendCookies = (user,res,message,statusCode=200)=>{
    const token = jwt.sign({_id:user._id},"dfdfsdfsdfadgfsadfa")
    res.status(statusCode).cookie("Token",token,{
        httpOnly:true,
        maxAge:15*60*1000
    }).json({
        success:true,
        message:message
    })
} 

module.exports=sendCookies