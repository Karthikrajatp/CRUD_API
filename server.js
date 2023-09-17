require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    orgin: FRONTEND,
    optionsSuccessStatus: 200
}

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cor())


//routes
app.use('/api/products',productRoute);

app.get('/',(req,res)=>{
    res.send('Hello Node API');
})

app.get('/blog',(req,res)=>{
    res.send('Hello My name is Karthik!!');
})

app.use(errorMiddleware);

mongoose.
connect(MONGO_URL)
.then(
    ()=>{
        console.log("Connected to MongoDB Atlas Database");
        app.listen(PORT,()=>{
            console.log("Node API app is running on port 3000")
        })
    })
.catch((error)=>{
        console.log(`Error in connecting to database ${error}`)
    })