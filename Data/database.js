const mongoose=require('mongoose')

const Connection = ()=>{ mongoose.connect("mongodb://localhost:27017",{
    dbName:'Users'
})
.then(()=>{console.log("Database is connecteded");})
.catch((e)=>{console.log(e);})
}

module.exports=Connection