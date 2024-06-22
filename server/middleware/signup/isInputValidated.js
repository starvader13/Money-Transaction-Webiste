import zod from 'zod';

const inputValidationSchema = zod.object({
    firstname: zod.string().max(50, {message: "First name should only be of maximum 50 characters."}),
    lastname: zod.string().max(50, {message: "Last name should only be of maximum 50 characters."}),
    username: zod.string().max(50, {message: "Username should only be of maximum 50 characters."}),
    password: zod.string().max(12, {message: "Password should be of maximum 8 characters"}).min(4, {message: "Password should be of minimum 4 characters"})
})

const isInputValidated = (req, res, next) => {
    const body = req.body;

    const response = inputValidationSchema.safeParse(body);

    if(!response.success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs",
            error: response.error.message
        })
    }

    return next();
}

export default isInputValidated;
