const Workout = require('../models/workoutModel.js');
const mongoose = require('mongoose');

// get all workouts

const getWorkouts = async(req, res) =>{
    try{
        const workouts = await Workout.find({}).sort({createdAt:-1});
        res.status(200).json(workouts);
    }catch(error){
        res.status(404).json({error:'No workouts'});
    }

}


// get a single workout
const getWorkout = async(req,res) => {
    const {id} = req.params;
    // for checking the type of id matched with type of mongoose id type
    // it will throw internal error if we will not check
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such workout'});
    }
    const workout = await Workout.findById(id);
    if(!workout)
    {
        return res.status(404).json({error:'no such workout'});
    }
    res.status(200).json(workout);
}

// create a new workout

const createWorkout = async(req, res) =>{
    try{
        const {title,loads,reps} = req.body;
        const workout = await Workout.create({title, loads, reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

// delete workout

const deleteWorkout = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such workout'});
    }
    const workout = await Workout.findOneAndDelete({_id:id});
    if(!workout)
    {
        return res.status(400).json({error:'no such workout'});
    }
    res.status(200).json(workout);
}


// update a workout

const updateWorkout = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such workout'});
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body});
    if(!workout)
    {
        return res.status(400).json({error:'no such workout'});
    }
    res.status(200).json(workout);

}


module.exports ={
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout

}