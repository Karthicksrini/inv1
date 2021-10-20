const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productschema = new Schema({
    productName:{
        type:String,
        minLength:5,
        maxLength:25,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }, 
    price:{
        type:Number,
        required:true,
    }, 
    description:{
        type:String,
        minLength:5,
        maxLength:25,
        required:true,
    },
    userQuantity:{
        type:Number,
        minLength:5,
        maxLength:25,
        required:true,
    },
    
})

const Product = mongoose.model("product",productschema,"product");
module.exports=Product;
