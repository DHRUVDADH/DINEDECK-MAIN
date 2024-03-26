const mongoose = require('mongoose')

const Schema = mongoose.Schema
const OrderSchema = new Schema({
    OrderItems: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    userName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    tableno: {
        type: String,
    },
    paytype: {
        type: String,
        required: true,
        default:cash
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    discount:{
        type:Number,
        default:0.1,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    
})

module.exports = mongoose.model('Order', OrderSchema)
