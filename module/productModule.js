
const Product = require("../models/Product");

exports.postProduct= async(req,res,next)=>{
    //Object created using model
    const product = new Product({
        productName:req.body.productName,
        quantity:req.body.quantity,
        price:req.body.price,
        description:req.body.description,
        userQuantity:req.body.userQuantity,
    })
    
    //save() function to post data
    var response = await product.save();
    res.send(response);

}

exports.getProduct=async(req,res,next)=>{
    var response= await Product.find();
    res.send(response);
}

exports.updateProduct= async (req,res,next)=>{
    const id = req.params.id
    var response = await Product.findByIdAndUpdate(id,
        { userQuantity:req.body.userQuantity,
          price:req.body.price,
          quantity:req.body.quantity

    })
    res.send(response);

}

exports.deleteProduct=async(req,res,next)=>{
    var response= await Product.findByIdAndRemove(req.params.id);
    res.send(response);
}