const mongoose = require('mongoose');
// romit2003portfolio
const mongoURL = process.env.DATABASE;

const mongodb = async () =>{
    await mongoose.connect(mongoURL,{useNewUrlparser:true,useUnifiedTopology:true},async(err,result)=>{
        if(err) console.log(err);
        else{
            console.log("Connected to MongoDB");
        }
    })
}

module.exports = mongodb;