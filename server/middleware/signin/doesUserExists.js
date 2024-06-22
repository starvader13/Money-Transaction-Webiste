import User from "../../models/user.js";
import bcrypt from "bcrypt";

const doesUserNotExists = async (req, res, next) => {
    const {username, password} = req.body;

    const response = await User.findOne({username: username});

    if(!response){
        return res.status(411).json({
            message: "Error while logging in"
        });
    }

    const passCompare = bcrypt.compareSync(password, response.password);

    if(!passCompare){
        return res.status(411).json({
            message: "Error while logging in"
        });
    }

    req.userId = response._id ;

    return next();
}

export default doesUserNotExists;
