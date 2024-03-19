const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = ()=>
{
    mongoose.connect(process.env.DATABASE_URL,{
        
    })
    .then(()=>{console.log("connection succesfully")})
    .catch((error)=>{
         console.log("recived an error");
         console.error(error.message);
         process.exit(1);
        });

}
    
module.exports = dbConnect;
