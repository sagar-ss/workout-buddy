import React from 'react'
import {useEffect, useState} from 'react';

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
            <p key={workout._id}>{workout.title}</p>
          ))}
        </div>
    </div>
  )
}

export default Home
