require('dotenv').config({path:"./env/.env"});
const express = require('express');

const workoutRoutes = require('./routes/workouts.js')

// express app
const app = express();


// middleware

app.use(express.json()); // for acessing the from data when 
                        //we perform put and post  request

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})


// routes

app.use('/api/workouts/',workoutRoutes);



//listen to requests
app.listen(4000,()=>{
    console.log('listening on port:',process.env.PORT );
})