import React from 'react'
import {useEffect, useContext} from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { WorkoutContext } from '../components/context/WorkoutContext';


const Home = () => {

  // const[workouts,setWorkouts] = useState(null);
  const {workoutArray,setWorkoutArray} = useContext(WorkoutContext);
  useEffect(()=>{

    const fetchWorkout = async()=>{
      const response = await fetch('/api/workouts')
      const json = await response.json(); // for coverting it into array of objects

      if(response.ok)
      {
        // setWorkouts(json);
        setWorkoutArray(json);
      }
    }
    fetchWorkout();

  },[])
  return (
    <div className='home'>
        <div className='workouts'>
          {/* {workouts && workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout} />
          ))} */}
          {workoutArray && workoutArray.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
        <WorkoutForm/>
    </div>
  )
}

export default Home
