const mongoose = require('mongoose')

const Schema = mongoose.Schema
const itamSchema = new Schema({
    iteamName:{
        type:String,
        required:true
    },
    iteamPrice:{
        type:Number,
        required:true
    },
    iteamCatogary:{
        type:String,
        required:true
    },
    iteamType:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('iteam', itamSchema)
