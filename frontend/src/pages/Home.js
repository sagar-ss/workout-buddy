import React from 'react'
import {useEffect, useState} from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const[workouts,setWorkouts] = useState(null);
  useEffect(()=>{

    const fetchWorkout = async()=>{
      const response = await fetch('/api/workouts')
      const json = await response.json(); // for coverting it into array of objects

      if(response.ok)
      {
        setWorkouts(json);
      }
    }
    fetchWorkout();

  },[])
  return (
    <div className='home'>
        <div className='workouts'>
          {workouts && workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
        <WorkoutForm/>
    </div>
  )
}

export default Home
