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
       return port
    } catch (err) {
       console.error(err)
    }
   } 

async function getMongoURI() {
try {
    let mongo_uri = await getParameter('MONGO_URI')
    return mongo_uri
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

//db config
mongoose.connect(getMongoURI(), {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("DB Connected")
    }
})

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
let port_listen = getPort()
app.listen(port_listen, () => console.log(`Listening on localhost:${port_listen}`))
