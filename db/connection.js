
const mongoose=require('mongoose')


const ConnectionString=process.env.CONNECTION_STRING

mongoose.connect(ConnectionString).then(res=>{
    console.log("mongoDB atless connected to pfserver");
    
}).catch(err=>{
    console.log(err);
    
})