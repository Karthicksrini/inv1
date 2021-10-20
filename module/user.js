const User = require("../models/user");

exports.postuser= async(req,res,next)=>{
    //Object created using model
    const user = new User ({
        name:req.body.name,
        status:req.body.status,
    })
    
    //save() function to post data
    var response = await user.save();
    res.send(response);

}

exports.getuser=async(req,res,next)=>{
        var response= await User.find();
        res.send(response);
    }

exports.updateuser= async (req,res,next)=>{
    const id = req.params.id
    var response = await User.findByIdAndUpdate(id,
        { name:req.body.name,
          status:req.body.status,

    })
    res.send(response);

}


exports.deleteuser=async(req,res,next)=>{
    var response= await User.findByIdAndRemove(req.params.id);
    res.send(response);
}