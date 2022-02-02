const express= require("express");
let app=express();
const loginRouter= require("./controllers/loginController.js");
const allowOrigin = require("./middlewares/allowOrigin.js");
const verifyToken = require("./middlewares/verifyToken.js");

app.use(allowOrigin);

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"Server is running on port 8080"
    });
})


app.use("/api",loginRouter);





app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})