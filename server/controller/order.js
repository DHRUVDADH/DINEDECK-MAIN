const orderSchema = require("../models/order");


const addOrder = async (req, res) => {

    const { order , totalValue,tableID} = req.body;

    if (!order || !totalValue) {
        return res.send({
            success: false,
            msg: "Data Missing"
        });
    }

    try {

        const unpaidOrder = await orderSchema.findOne({ tableNo:tableID , isPaid: false });

        if (!unpaidOrder) {
            return res.send({
                success: false,
                msg: "No unpaid orders found"
            });
        }

      
        const updatedOrder = await orderSchema.findByIdAndUpdate(
            unpaidOrder._id,
            { OrderItems: order,
            totalPrice:totalValue,
             },
            { new: true } 
        );

        return res.send({
            success: true,
            data: updatedOrder
        });
    } catch (err) {
        console.log(err);
        return res.send({
            success: false,
            msg: "Internal Server Err"
        });
    }
};

const find = async(req,res)=>{

    try{
        const {tableID} = req.query;
        console.log(tableID)
        if(!tableID){
            return res.send({
                success: false,
                msg: "Data Missing"
            });
        }

        const unpaidOrder = await orderSchema.findOne({ tableNo:tableID,isPaid: false });
        console.log(unpaidOrder)
        if(unpaidOrder){
            return res.send({
                success: true,
                data: unpaidOrder
            });
        }
        create(req,res);
    }catch(err){
        return res.send({
            success:false,
            msg:"Internal Server Err"
        })
    }
}


const create = async (req,res)=>{
   
    try {
        const {tableID} = req.query;
        const postedData = await orderSchema.create({
            userName:"test",
            totalPrice:0,
            tableNo:tableID
        });
        console.log(postedData);
        return res.send({
            success: true,
            data:postedData
        })
    } catch (err) {
        console.log(err);
        return res.send({
            success: false,
            msg:"Internal Server Err"
        })
    }
}


const create2 = async (req,res)=>{
   
    try {
        const postedData = await orderSchema.find({isPaid:false});
        console.log(postedData);
        return res.send({
            success: true,
            data:postedData
        })
    } catch (err) {
        console.log(err);
        return res.send({
            success: false,
            msg:"Internal Server Err"
        })
    }
}


const paid = async (req,res)=>{
    try {
        const {tableID} = req.body;
        const postedData = await orderSchema.find({tableNo:tableID , isPaid:false});
        console.log(postedData)
        const updatedData =await orderSchema.findByIdAndUpdate({_id:postedData[0]._id},{
            isPaid:true
        })
        return res.send({
            success: true,
            data:updatedData
        })
    } catch (err) {
        console.log(err);
        return res.send({
            success: false,
            msg:"Internal Server Err"
        })
    }
}

module.exports={addOrder , paid , create, create2 , find};