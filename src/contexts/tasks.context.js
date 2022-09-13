import React, {createContext, useReducer} from 'react';
import taskReducer from '../reducers/task.reducer';
import { v4 as uuidV4 } from "uuid";
import useTaskState from '../hooks/useTaskState';

const defaultTasks = [
    {id: uuidV4(), task: 'Look at my calander.', completed: false},
    {id: uuidV4(), task: 'Note my responsibilities.', completed: true},
    {id: uuidV4(), task: 'Add Tasks to my todo-list!!!', completed: false},
];

export const TasksContext = createContext();

export function TaskProvider(props) {

    // const TaskCrudOps = useTaskState(defaultTasks);

    const [ tasks, dispatch ] = useReducer(taskReducer, defaultTasks);

    return(
        <TasksContext.Provider value={{tasks, dispatch}}>
            {props.children}
        </TasksContext.Provider>
    );
}
