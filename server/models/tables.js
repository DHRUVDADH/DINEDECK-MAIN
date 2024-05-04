const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
	{
		
		Orderno: {
			type: Number,
			default:null,
			trim: true,
		},
		Tableno: {
			type: String,
			required: true,
			trim: true,
		},
		isRunning: {
			type: Boolean,
			enum: ["true", "false"],
			required: true,
		}
		
	}
);

module.exports = mongoose.model("Table", TableSchema);