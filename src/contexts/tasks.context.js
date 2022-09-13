import React, {createContext, useReducer} from 'react';
import taskReducer from '../reducers/task.reducer';
import { v4 as uuidV4 } from "uuid";
// import useTaskState from '../hooks/useTaskState';

const defaultTasks = [
    {id: uuidV4(), task: 'Look at my calander.', completed: false},
    {id: uuidV4(), task: 'Note my responsibilities.', completed: true},
    {id: uuidV4(), task: 'Add Tasks to my todo-list!!!', completed: false},
];

export const TasksContext = createContext();

export const DispatchContext = createContext();

export function TaskProvider(props) {

    // const TaskCrudOps = useTaskState(defaultTasks);

    const [ tasks, dispatch ] = useReducer(taskReducer, defaultTasks);

    return(

        <TasksContext.Provider value={tasks}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TasksContext.Provider>

        // <TasksContext.Provider value={{tasks}}> --- no need to enter an object....objects will trigger unnecessary render
        //     <DispatchContext.Provider value={{dispatch}}> --- no need to enter an object....objects will trigger unnecessary render
        //         {props.children}
        //     </DispatchContext.Provider>
        // </TasksContext.Provider>
    );
}
