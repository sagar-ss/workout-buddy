const express = require('express');
const Workout = require('../models/workoutModel.js');

const router = express.Router();

//Get all workouts
router.get('/',(req,res)=>{
    res.json({msg:"GET all workout"});
});

// Get a single workout
router.get('/:id',(req,res)=>{
    res.json({msg:"GET a single workout"});
});

// POST a new workout
router.post('/',async(req,res)=>{

    const {title, loads, reps} = req.body;
    const workout = await Workout.create({title,loads, reps});
    try{
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

// DELETE a workout
router.delete('/:id',(req,res)=>{
    res.json({msg:"DELETE a workout"});
});

// UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({msg:"Update a workout"});
});

module.exports = router;