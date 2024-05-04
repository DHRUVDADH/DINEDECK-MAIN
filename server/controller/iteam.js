const iteamModel = require("../models/iteams");

const addIteam = async (req, res) => {
    const { items } = req.body;
    if (!items) {
        return res.send({
            success: false,
            msg: "Data Missing"
        })
    }
    try {
        const postedData = await iteamModel.insertMany(items);
        return res.send({
            success: true
        })
    } catch (err) {
        console.log(err);
        return res.send({
            success: false,
            msg:"Internal Server Err"
        })
    }
}

const getIteam = async (req,res)=>{
    try{
        const iteam = await iteamModel.find({});
        return res.send({
            success: true,
            data:iteam
        })
    }catch(err){
        console.log(err);
        return res.send({
            success: false,
            msg:"Internal Server Err"
        })
    }
}

module.exports = { addIteam , getIteam};