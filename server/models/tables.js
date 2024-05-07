const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
	{
		Orderno: {
			type: Number,
			default:null,
		},
		isRunning: {
			type: Boolean,
			enum: ["true", "false"],
			default:false
		},
		owner:{
			type: mongoose.Schema.Types.ObjectId
		}
	}
);

module.exports = mongoose.model("Table", TableSchema);