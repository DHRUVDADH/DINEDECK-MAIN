const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		firstname: {
			type: String,
			required: true,
			trim: true,
		},
		lastname: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},

		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},
		
		accountType: {
			type: String,
			enum: ["Manager", "Customer", "Chef"],
			required: true,
		},

		token:
		{
			type: String,

		},
		resetPasswordExpires:
		{
			type:Date,

		},
		// Add timestamps for when the document is created and last modified
	},
	{ timestamps: true }
);




// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);