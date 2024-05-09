require('dotenv').config({path: '../backend/config.env'});
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongodb = require('./db');
mongodb();



app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use(cors());

app.use(
    express.urlencoded({extended:true})

);
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

app.use(express.json());

app.use('/api', require("./routes/GetDetails"));

if(process.env.NODE_ENV == "production")
{
    app.use(express.static("client/build"));
}

app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
})