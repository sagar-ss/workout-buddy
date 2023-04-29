import { useState ,useContext} from 'react'
import { WorkoutContext } from './context/WorkoutContext'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [loads, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const {setWorkoutArray} = useContext(WorkoutContext);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, loads, reps}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if(!response.ok)
    {
      setError(json.error)
    }
    
    if(response.ok)
    {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      setWorkoutArray((prevState)=>[...prevState,json]);
      console.log('new workout added:', json);
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={loads}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm