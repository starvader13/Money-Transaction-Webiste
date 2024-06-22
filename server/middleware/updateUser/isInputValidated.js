import zod from 'zod';

const inputValidationSchema = zod.object({
    firstname: zod.string().max(50, {message: "First name should only be of maximum 50 characters."}).optional(),
    lastname: zod.string().max(50, {message: "Last name should only be of maximum 50 characters."}).optional(),
    username: zod.string().max(50, {message: "Username should only be of maximum 50 characters."}).optional(),
}).strict()

const isInputValidated = (req, res, next) => {
    const body = req.body;

    const response = inputValidationSchema.safeParse(body);

    if(!response.success){
        return res.status(411).json({
            message: "Error while updating information",
            error: response.error.issues[0].message
        })
    }

    return next();
}

export default isInputValidated;
