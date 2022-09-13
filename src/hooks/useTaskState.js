import {useState} from "react";
import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidV4 } from "uuid";

export default (initialTasks) => {
    const [tasks, setTasks] = useLocalStorageState('tasks', initialTasks);

    return {
        tasks,
        addTask: (newTask) => {
            let newTaskEntry = {
                id: uuidV4(),
                task: newTask,
                completed: false
            };
        
            setTasks([...tasks, newTaskEntry]);
        },
        removeTask: (taskId) => {
            console.log(`@TaskApp removing task with id... ${taskId}`);
            let updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
        },
        toggleTaskCompleted: (taskId) => {
            console.log(`@TaskApp toggling task completed with id... ${taskId}`);
            let updatedTasks = tasks.map(task => 
                task.id === taskId ? {...task, completed: !task.completed} : task
            );
            setTasks(updatedTasks);
        },
        editTask: (taskId, taskUpdate) => {
            console.log(`@TaskApp edititing task with id... ${taskId}`);
            console.log(`@TaskApp edititing task with taskUpdate... ${taskUpdate}`);
            let updatedTasks = tasks.map(task => 
                task.id === taskId ? {...task, task: taskUpdate} : task
            );
            setTasks(updatedTasks);
        }
    };
}; 
