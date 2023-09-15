const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        unique:true
    },
    description:{
        type:String,
        unique:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Tasks=mongoose.model('Tasks',taskSchema)
module.exports=Tasks