import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"
import getParameter from "./utils/getParameters.js"

//app config
const app = express()

mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

let port, MONGO_URI
async function someFunc(){
    try {
        port = await getParameter('PORT') || 8001;
        console.log("port :::::::::::::::::" + port)
        MONGO_URI = await getParameter('MONGO_URI');
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
        }, (err) => {
            if (err) {
                console.log("Error inside mongo-----------------",err)
            } else {
                console.log("DB Connected")
            }
        })
    } catch (err) {
        console.log("An error occured in someFunc -----------", err);
    }
};

await someFunc();

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
