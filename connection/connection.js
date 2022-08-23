const mongoose = require("mongoose")
require('dotenv').config();


const connect= ()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@quizproject.ljrwjan.mongodb.net/quiz_app?retryWrites=true&w=majority`,{
       },(err)=>{
        if(err){
            console.log(err)
        }
        console.log("connection suceessfully")
    })
}

module.exports = connect;