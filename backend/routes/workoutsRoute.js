const express = require('express');

const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}   = require('../controllers/workoutController.js');

const router = express.Router();

//Get all workouts
router.get('/',getWorkouts);

// Get a single workout
router.get('/:id',getWorkout);

// POST a new workout
router.post('/',createWorkout);

// DELETE a workout
router.delete('/:id',deleteWorkout);

// UPDATE a workout
router.patch('/:id',updateWorkout);

module.exports = router;