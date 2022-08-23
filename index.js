const express = require("express");
const dataRouter = require("./routes/data")
const connect = require("./connection/connection")
var cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json());


app.use("/api/quiz",dataRouter)




app.listen(4005,()=>{
    console.log("server is run port on 4005")
    connect();
})