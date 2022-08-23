const mongoose = require("mongoose")



const connect= ()=>{
    mongoose.connect(`${process.env.MONGO_URL}`,{
       },(err)=>{
        if(err){
            console.log(err)
        }
        console.log("connection suceessfully")
    })
}

module.exports = connect;