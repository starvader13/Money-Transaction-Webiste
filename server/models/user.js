import mongoose from "mongoose";
import startDatabase from "../databaseConfig/db.js";

await startDatabase();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        primary: true,
        maxLength: 50,
        minLength: 4,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
