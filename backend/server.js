require('dotenv').config();
const express = require('express');

// express app
const app = express();

// middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);l
    next();
})


// routes
app.get('/',(req,res)=>{
    res.json({msg:'welcome to the app'});
})

//listen to requests
app.listen(4000,()=>{
    console.log('listening on port:',process.env.PORT );
})