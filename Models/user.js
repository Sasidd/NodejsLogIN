const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

//Model
const Users = mongoose.model('User',UserSchema)

module.exports = Users