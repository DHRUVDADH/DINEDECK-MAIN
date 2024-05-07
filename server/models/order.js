const mongoose = require('mongoose')

const Schema = mongoose.Schema
const OrderSchema = new Schema({
    OrderItems: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId },
            iteamName: { type: String },
            iteamPrice: { type: String },
            iteamCatogary: { type: String },
            iteamType: { type: String },
            __v: { type: Number },
            quantity: { type: Number }
        },
    ],
    userName: {
        type: String,

    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    paytype: {
        type: String,
        default: "cash"
    },
    totalPrice: {
        type: Number,
        default: 0.0,
    },
    discount: {
        type: Number,
        default: 0.1,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    crt_time: {
        type: Date,
        default: Date.now(),
    },
    tableNo:{
        type: mongoose.Schema.Types.ObjectId
    },

})

module.exports = mongoose.model('Order', OrderSchema)
