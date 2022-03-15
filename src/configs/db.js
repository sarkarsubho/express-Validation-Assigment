//this is where mongoose server connection are written
const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect(
        "mongodb+srv://subhankar:subho0905@cluster0.zrx9z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};