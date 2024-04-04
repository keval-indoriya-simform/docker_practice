import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"
import getParameter from "./utils/getParameters.js"

//app config
const app = express()
let port, mongo_uri;
(async ()=>{
    try{
        port = await getParameter('PORT');
        mongo_uri = await getParameter('MONGO_URI');
    }
    catch (err){
        console.log("Error occured: ", err);
    }
})();

mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

//db config
mongoose.connect(mongo_uri, {
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
app.listen(port, () => console.log(`Listening on localhost:${port}`))
