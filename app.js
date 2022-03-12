const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path = require("path")
require("dotenv").config()

const msgRoute=require('./route/msg');

const app=express();
const port=process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(res=>{
    console.log('database connected');
})
.catch(err=>{
    console.log(err);
})

// app.use(cors());
// app.use(morgan())
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend", "build")))


app.use('/api',msgRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(port,()=>{
    console.log('server is up and running on port',port);
})