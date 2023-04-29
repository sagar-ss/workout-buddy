import { createContext, useState } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({children}) =>{
    const [workoutArray,setWorkoutArray] = useState(null);
    return(
        <WorkoutContext.Provider value={{workoutArray,setWorkoutArray}}>
            {children}
        </WorkoutContext.Provider>
    )
}

