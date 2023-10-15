import express from "express";
import {PORT,MONGODBURL} from "./config.js";
import mongoose from "mongoose"; 
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';
const app=express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling cors policy
app.use(cors);

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use('/books',booksRoute);

mongoose.connect(MONGODBURL)
.then(()=>{
    console.log('connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}) 
 .catch ((error)=>{
    console.log(error);
    
});