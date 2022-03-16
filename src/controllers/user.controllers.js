//it is definer for writting the CRUD operations 


const express =require("express");

const { body, validationResult } = require('express-validator');
const rout =express.Router();

const users=require("../models/user.models");



rout.post("/",
body("first_name")
.trim().not().isEmpty().withMessage("First Name cannot be empty").isLength({min:4,max:20}).withMessage("First name should be atleast 4 and not more than 20"),


body("last_name")
.trim().not().isEmpty().withMessage("last Name cannot be empty").isLength({min:3,max:20}).withMessage("last name should be atleast 3 and not more than 20"),


body("email")
.trim().not().isEmpty().withMessage("email cannot be empty").isEmail().custom( async(value)=>{
    const myuser=await users.findOne({email:value});
    if(myuser){
        throw new Error("Email is already taken please try another")
    }
    return true;
}),
body("pincode")
.trim().not().isEmpty().withMessage("Pincode cannot be empty").isLength({min:6,max:6}).withMessage("pincode should only 6 Numbers"),


body("age")
.trim().not().isEmpty().withMessage("Age cannot be empty").custom((value)=>{
    if (value<1 || value>100){
        throw new Error("Incract age provided")
    }
    return true;
}).withMessage("age should be within 1to 100"),


body("gender")
.trim().not().isEmpty().withMessage("Gender cannot be empty")
,
async (req,res)=>{
    try{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }


        const user=await users.create(req.body);
        res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message:err.message});
    }
}

);

module.exports =rout;