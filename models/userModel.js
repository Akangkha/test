import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:[true,"Must provide a username"],
        unique:[true,"Must be unique"]
    },
    email: {
        type:String,
        required:[true,"Must provide a email"],
        unique:[true,"Must be unique"]
    },
    password: {
        type:String,
        required:[true,"Must provide a password"],
    },
    },
    {
        timestamps:true
    });



    const User=mongoose.model.User || mongoose.model("User",userSchema);
    export default User;