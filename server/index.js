import express from 'express';
import mainRouter from "./routes/index.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", mainRouter);

app.listen(3000, ()=>{
    console.log("Listening at PORT 3000");
})
