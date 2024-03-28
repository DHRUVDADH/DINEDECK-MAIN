const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
    halls: {
        type: Map,
        of: [{
            id: Number,
            currentOrder: String // Use camelCase for consistency
        }]
    }
});

module.exports = mongoose.model("hall", hallSchema);
