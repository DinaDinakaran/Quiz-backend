const express = require("express");
const router = express.Router();
const questionDetails = require ("../Schema/dataSchema")

const data =require ("../data.json");



// router.get("/:id",(req,res)=>{
//     const ID = req.params.id
//     const result = data.filter((data)=>data.id===ID)
//     res.status(200).send(result)
// router.post("/create",(req,res)=>{
//    console.log(req.body)
//    try {
// const value = new questionDetails(req.body)
// value.save((err,data)=>{
//   if(err){
//     res.status(400).send(err)
//     console.log(err)
//   }
//   res.status(201).json(data)
// })
//    } catch (error) {
//       console.log(error)
//    }
// })

// })



router.get('/',(req,res)=>{
res.status(200).json({message:"Welcome to the Quiz App"})
})

router.get('/:id',(req,res)=>{
   const ID = req.params.id
       const result = data.filter((data)=>data.id===ID)
       res.status(200).send(result)
   })


router.post('/',(req,res)=>{
  
   try {
      const value = new questionDetails(req.body)
      console.log(req.body)
      value.save((err,data)=>{
        if(err){
          res.status(400).send(err)
          console.log(err)
        }
        res.status(201).json(data)
      })
         } catch (error) {
            console.log(error)
         }
      })
      
   



module.exports= router;