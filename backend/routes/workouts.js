const express = require('express');

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
router.post('/',(req,res)=>{
    res.json({msg:"POST a new workout"});
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