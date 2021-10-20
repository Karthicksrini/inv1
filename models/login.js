const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    name:{
        type:String,
        minLength:5,
        maxLength:25,
        required:true,
    },
    email:{
        type:String,
        minlength:7,
        maxlength:30,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:20,
    }, 
    conpassword:{
        type:String,
        required:true,
        minlength:8,
        maxlength:20,
    }, 

});

const login = mongoose.model("login",loginSchema,"login");
module.exports=login;