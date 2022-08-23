const mongoose =require("mongoose")


const QuizSchema = new mongoose.Schema({
   question:{
    type : String,
   },
   answer :{
    type : String,
   }
})

module.exports = mongoose.model("QuestionSchema",QuizSchema)