import React, {createContext} from 'react';
import { v4 as uuidV4 } from "uuid";
import useTaskState from '../hooks/useTaskState';

const defaultTasks = [
    {id: uuidV4(), task: 'Look at my calander.', completed: false},
    {id: uuidV4(), task: 'Note my responsibilities.', completed: true},
    {id: uuidV4(), task: 'Add Tasks to my todo-list!!!', completed: false},
];

export const TasksContext = createContext();

export function TaskProvider(props) {

    const TaskCrudOps = useTaskState(defaultTasks);
    
    return(
        <TasksContext.Provider value={TaskCrudOps}>
            {props.children}
        </TasksContext.Provider>
    );
}
