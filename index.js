require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./db/connection')
const router = require('./Routes/route')
require('./Routes/route')


const  pfServer=express()
pfServer.use(cors())

pfServer.use(express.json())
pfServer.use(router)




const PORT = process.env.PORT || 3000

pfServer.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT} `);
    
})


