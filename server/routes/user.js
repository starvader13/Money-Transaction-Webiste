import { Router } from "express";
import isSignupInputValidated from "../middleware/signup/isInputValidated.js";
import doesUserNotExists from "../middleware/signup/doesUserNotExists.js";
import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from "../config.js";
import doesUserExists from "../middleware/signin/doesUserExists.js";
import isSignInInputValidated from "../middleware/signin/isInputValidated.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/signup", isSignupInputValidated, doesUserNotExists, async (req, res)=>{
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

router.post("/signin", isSignInInputValidated, doesUserExists, async (req, res)=>{
    const {username} = req.body.username;

    const token = "Bearer " + jwt.sign({userId: req.userId, username: username}, JWT_SECRET);
    return res.status(200).json({
        token: token
    });
})

router.use(authMiddleware);

router.put("/", async (req, res, next)=>{

})

export default router;
