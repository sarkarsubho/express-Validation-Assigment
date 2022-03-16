//it is definer for writting the CRUD operations 


const express =require("express");

const { body, validationResult } = require('express-validator');
const rout =express.Router();

const users=require("../models/user.models");



rout.post("/",

async (req,res)=>{
    try{
        const user=await users.create(req.body);
        res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message:err.message});
    }
}

);

module.exports =rout;