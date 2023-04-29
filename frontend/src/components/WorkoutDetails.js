import { WorkoutContext } from "./context/WorkoutContext";
import {useContext} from 'react';
const WorkoutDetails = ({ workout }) => {

  const {workoutArray,setWorkoutArray} = useContext(WorkoutContext);

  const handleDelete = async (workout_id) =>{
    const response = await fetch('/api/workouts/'+workout_id,{
      method:'DELETE'
    });
    const json = await response.json();
    if(!response.ok)
    {
      return console.log(json.error);
    }
    else
    {
      const newArray = workoutArray.filter((w) => w._id!==workout_id);
      setWorkoutArray(newArray);
    }

  }

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.loads}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={()=>handleDelete(workout._id) }style={{backgroundColor:'#1aac83', color:'white'}}>Delete</span>
      </div>
    )
  }
  
  export default WorkoutDetails