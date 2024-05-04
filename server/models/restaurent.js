const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const restaurentSchema = new mongoose.Schema(
	{  
		Manager:
		{
			type:String,
			required:true,
		
		},
		totaltable: {
			type: Number,
			required: true,
			trim: true,
		},
		totalhall: {
			type: Number,
			required: true,
			trim: true,
		},
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("restaurent", restaurentSchema);