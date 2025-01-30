import mongoose from "mongoose";

const usersSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:String,
    password:String,
    role:
    {type:String,
        default:"user",
    }

})
const userModel=mongoose.model ("users",usersSchema)

export default userModel;