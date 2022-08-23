const express = require("express");
const dataRouter = require("./routes/data")
const connect = require("./connection/connection")
const dotenv = require('dotenv')
var cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json());

dotenv.config()

app.use("/api/quiz",dataRouter)


const port = process.env.PORT ;


app.listen(port,()=>{
    console.log(`srver is running on the port ${port}`)
    connect();
})