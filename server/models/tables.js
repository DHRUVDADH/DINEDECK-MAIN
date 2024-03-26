const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
	{
		
		Orderno: {
			type: Number,
			required: true,
			trim: true,
		},
		Tableno: {
			type: String,
			required: true,
			trim: true,
		},
	
		CustomerName: {
			type: String,
			required: true,
            maxLength:20,
		},

	
		CustomerPhoneno: {
			type: Number,
			required: true,
		},
		
		PaymentType: {
			type: String,
			enum: ["Cash", "UPI"],
			required: true,
		},

        MyAmount:
        {
            type:Number,
            require:true,
        },

        Tax:{
            type:Number,
            require:true
        },

        Discount:{
            type:Number,
            require:true
        },

        GrantTotal:{
            type:Number,
            require:true
        },

        Crt_at:{
            type:Date,
            default:new Date(Date.now()),
        }
		
	}
);

module.exports = mongoose.model("Table", TableSchema);