import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Account from "../models/account.js";
import mongoose from "mongoose";

const router = Router();

router.use(authMiddleware);

router.get("/balance", async(req,res)=>{
    const response = await Account.findOne({userId: req.userId});

    if(!response){
        return res.status(400).json({
            message: "Internal Server Error"
        });
    }

    return res.status(200).json({
        balance: response.balance
    });
})

router.post("/transfer", async (req,res)=>{
    const session = await mongoose.startSession();

    try{
        session.startTransaction();

        const {amount, to} = req.body;

        const fromAccount = await Account.findOne({
            userId: req.userId
        }).session(session);

        if(!fromAccount && fromAccount.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            })
        }

        const toAccount = await Account.findOne({
            userId: to
        }).session(session);

        if(!toAccount){
            return res.status(400).json({
                message: "Invalid account"
            })
        }

        await Account.findOneAndUpdate({userId: fromAccount.userId}, {$inc: {balance: -amount}}).session(session);
        await Account.findOneAndUpdate({userId: toAccount.userId}, {$inc: {balance: amount}}).session(session);

        await session.commitTransaction();

        res.status(200).json({
            message: "Transfer successful"
        });
    }catch(e){
        return res.status(404).json({
            message: "Transaction Failed"
        })
    }

});

export default router
