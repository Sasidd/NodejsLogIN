const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./Routes/user')
const Connection = require('./Data/database')
const cookieParse = require('cookie-parser')

const app = express()
Connection()
app.use(express.json())
app.use(userRouter)
app.use(cookieParse())

app.use('/api/v1/user',userRouter)

app.listen(4000,()=>{
    console.log('Server is running');
})
