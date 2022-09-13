import { v4 as uuidV4 } from "uuid";

const reducer = (state, action) => {
    switch (action.type) {

        // action = { type: 'ADD-TASK', task: 'something new...' }
        case 'ADD-TASK':
            return [...state, { id: uuidV4(), task: action.task, completed: false }];

        // action = { type: 'REMOVE-TASK', id: 12345 }
        case 'REMOVE-TASK':
            return state.filter(task => task.id !== action.id);

        // action = {type: 'TOGGLE-TASK-COMPLETED', id: 12345 }
        case 'TOGGLE-TASK-COMPLETED':
            return state.map(task => 
                task.id === action.id ? {...task, completed: !task.completed} : task
            ); 

        // action = {type: 'EDIT-TASK', id: 12345, taskUpdate: 'Something new...' }
        case 'EDIT-TASK':
            return state.map(task => 
                task.id === action.id ? {...task, task: action.taskUpdate} : task
            );

        default:
            return state;
    }

};

export default reducer