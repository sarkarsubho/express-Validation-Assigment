//here write all the Schemas and models
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        //first_name, last_name, email, pincode, age, gender,
        first_name:{ type: String, required: true },
        last_name:{ type: String, required: true },
        email:{ type:String},
        pincode:{ type: String, required: true },
        age:{ type: Number, required: true },
        gender:{ type: String, required: true,enum:["male","female","Others"]}

    },
    {
        versionKey:false,
        timestamps:true
        
    }
);

module.exports =mongoose.model("user",userSchema)