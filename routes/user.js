var express = require("express");

var router = express.Router();

const {postuser,getuser,updateuser,deleteuser} = require("../module/user");

router.post("/postuser",postuser);
router.get("/getuser",getuser);
router.patch("/updateuser/:id", updateuser)
router.delete("/deleteuser/:id", deleteuser)


module.exports= router;