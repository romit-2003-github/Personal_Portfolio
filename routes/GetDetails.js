const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/getdetails",async(req,res)=>{
    try{
        await User.create({
            name : req.body.name,
            emailId  : req.body.emailId,
            phone : req.body.phone,
            message : req.body.message
        })
        res.json({success:true});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false});
    }
})

module.exports = router;