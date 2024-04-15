const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db")

//middelware
app.use(cors());
app.use(express.json());

//Routes
//create a to-do
app.post("/todos", async(req,res)=>{
    try{
    const {description} = req.body;
    
    }
    catch(error){
    console.log(error)
    }
})
//get all todo

//get a todo

//update a todo

//delete a todo

app.listen(5000,()=>{
    console.log("Server is running on PORT 5000.")
})
