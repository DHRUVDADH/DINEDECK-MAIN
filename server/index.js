const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./routes/routes')
const item = require("./routes/iteam");
const {halls} = require("./controller/hall")
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;
const cookie=require("cookie-parser");
app.use(cookie());
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000" , "http://localhost:5173"],
    })
);

const dbConnect = require("./config/database");
dbConnect();

app.use("/api/v1/auth",router);
app.use('/food',item);

app.post('/test',halls)

app.listen( PORT ,()=>
{
    console.log(`server started successfully on port ${PORT}`);
});



app.post("/Signup",(req,res)=>
{

})




