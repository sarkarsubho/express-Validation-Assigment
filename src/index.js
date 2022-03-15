const express=require("express");

const userController =require("./controllers/user.controllers");

const app=express();
app.use(express.json());

app.use("/users",userController);
//http://localhost:5000/users  this will go to the usersControllers.



module.exports=app;
// const connect=require("./configs/db");

// app.listen(5000,async function(){
//     try{
//         await connect();
//         console.log("listning on port 5000");
    
//     }catch(err){
//         console.error(err.message);
//     }
//     });

