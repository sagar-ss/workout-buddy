require('dotenv').config({path:"./env/.env"});
const express = require('express');
const mongoose = require('mongoose');

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

// db connection {it's a async func}

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen to requests
    app.listen(process.env.PORT,()=>{
        console.log('connected to db && listening on port:',process.env.PORT );
    })

})
.catch((error) => {
    console.log(error)
})



