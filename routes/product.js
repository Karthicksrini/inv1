var express = require("express");

var router = express.Router();

const {postProduct,getProduct,updateProduct,deleteProduct} = require("../module/productModule");

router.post("/postproduct",postProduct);
router.get("/getProduct",getProduct);
router.patch("/updateproduct/:id", updateProduct)
router.delete("/deleteProduct/:id", deleteProduct)


module.exports= router;