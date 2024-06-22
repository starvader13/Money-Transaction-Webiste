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
        maxLength: 25,
        minLength: 4,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
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