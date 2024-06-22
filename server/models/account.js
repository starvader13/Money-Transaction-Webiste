import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    balance:{
        type: Number,
        require: true
    }
}, {timestamps: true})

const Account = mongoose.model('Account', accountSchema);

export default Account;
