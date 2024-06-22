import { Router } from "express";
import isInputValidated from "../middleware/signup/isInputValidated.js";
import doesUserNotExists from "../middleware/signup/doesUserNotExists.js";
import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from "../config.js";

const router = Router();

router.post("/signup", isInputValidated, doesUserNotExists, async (req, res)=>{
    const body = req.body;

    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);

    const response = User.create(body);

    if(!response){
        res.status(400).json({
            message: "Internal Server Error"
        });
    }

    const token = "Bearer " + jwt.sign({userId: response._id, username: response.username}, JWT_SECRET);

    res.status(200).json({
        message: "User created successfully",
        token: token
    });
})

export default router;
