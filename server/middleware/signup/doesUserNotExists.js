import User from "../../models/user.js";

const doesUserNotExists = async (req, res, next) => {
    const {username} = req.body;

    const response = await User.findOne({username: username});

    if(response){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    return next();
}

export default doesUserNotExists;
