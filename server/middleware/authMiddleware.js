import jwt from "jsonwebtoken";
import JWT_SECRET from "../config.js";

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    if(!token || !token.startsWith("Bearer ")){
        return res.status(403).json({
            message: "Authentication Failed"
        });
    }

    const signature = token.split(' ')[1];

    try{
        const response = jwt.verify(signature, JWT_SECRET);
        req.userId = response.userId;
        return next();
    }catch(e){
        return res.status(403).json({
            message: "Authentication Failed"
        });
    }
}

export default authMiddleware;
