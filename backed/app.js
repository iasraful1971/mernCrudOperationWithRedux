const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

//use middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



//config 
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"../backed/config/config.env"
    })}
  

// router
const ProductRouter = require("./Routes/ProductRoutes");

app.use("/rest-api",ProductRouter);


app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
});


module.exports = app;