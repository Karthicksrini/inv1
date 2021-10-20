const express = require("express");
const mongo = require("./mongo");
const brand= require("./routes/brand");
const category= require("./routes/category.js");
const store= require("./routes/store");
const user= require("./routes/user")
const group= require("./routes/group");
const colors=require("./routes/colors");
const size=require("./routes/size");
const product=require("./routes/product");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');


var cors =require("cors");
const app= express()



//Mongodb Connect
mongo.connect();
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//parse request body into JSON format
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.urlencoded({extended:true}));
//Common Middleware is called.

app.use((rq,res,next)=>{
 console.log("Middleware 1 called!!")
 next();
});


//Routers
// app.use("/signup", postSignup);
app.use("/User", user)
app.use("/brand", brand);
app.use("/category", category);
app.use("/store",store);
app.use("/colors",colors);
app.use("/size",size)
app.use("/group",group)
app.use("/product",product)
//app.use("/login",login)
//Auth Token Middleware
// app.use((req,res,next)=>{
//     const token = req.headers["auth-token"];
//     //console.log(token);
//     if(token){
//         try{
//    req.user= jwt.verify(token, "guvi@123"  );
//               next();
//         }catch(err){
//             res.sendStatus(401);
//             console.log("error on auth", err);
//         }
//     }else{
//         res.sendStatus(401);
//     }

// }); 

// app.use("/posts",postRouter);
   

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


module.exports = app;
//Server Start
// app.listen(3010,()=>{
//     console.log(`Connected to Mongo - 27107 `)
// });
//     }catch(err){
//         console.log("Error starting server", err);
//     }


                 