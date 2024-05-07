const tableModal = require("../models/tables");

const addTable = async (req,res)=>{
    try{
        const {_id} = req.user;

        const response = await tableModal.insertMany([
            { owner: _id },
            { owner: _id },
            { owner: _id },
            { owner: _id },
            { owner: _id },
        ]);
        return res.send({
            success: true,
            msg:"Table Created",
            data:response
        })
    }catch(err){
        console.log(err)
            return res.send({
                success: false,
                msg:"Internal Server Err"
            })
    }
}
const findTable = async (req,res)=>{
    try{
        const {_id} = req.user;

        const response = await tableModal.find({owner:_id});
        return res.send({
            success: true,
            msg:"Table Founded",
            data:response
        })
    }catch(err){
        console.log(err)
            return res.send({
                success: false,
                msg:"Internal Server Err"
            })
    }
}

module.exports = { addTable , findTable} ;