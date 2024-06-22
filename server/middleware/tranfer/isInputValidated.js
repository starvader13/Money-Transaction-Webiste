import zod from 'zod';

const inputValidationSchema = zod.object({
    amount: zod.number().min(1, {message: "Minimum transfer amount should be Rupees 1"}),
    to: zod.string()
}).strict();

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
