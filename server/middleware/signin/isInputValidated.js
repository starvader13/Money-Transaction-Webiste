import zod from 'zod';

const inputValidationSchema = zod.object({
    username: zod.string().max(50, {message: "Username should only be of maximum 50 characters."}),
    password: zod.string().max(12, {message: "Password should be of maximum 8 characters"}).min(4, {message: "Password should be of minimum 4 characters"})
})

const isInputValidated = (req, res, next)=>{
    const body = req.body;

    const response = inputValidationSchema.safeParse(body);

    if(!response.success){
        return res.status(411).json({
            message: "Error while logging in",
            error: response.error.message
        })
    }

    return next();
}

export default isInputValidated;
