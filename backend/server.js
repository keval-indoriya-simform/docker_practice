import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"
import getParameter from "./utils/getParameters.js"


async function getPort() {
    try {
       let port = await getParameter('PORT')
       return port.toString
    } catch (err) {
       console.error(err)
    }
   } 

async function getMongoURI() {
try {
    let mongo_uri = await getParameter('MONGO_URI')
    return mongo_uri.toString
} catch (err) {
    console.error(err)
}
} 
//app config
const app = express()

mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

let port, MONGO_URI
async function someFunc(){
    try {
        MONGO_URI = await getParameter('MONGO_URI');
        port = await getParameter('PORT') || 8001;
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

someFunc();

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
