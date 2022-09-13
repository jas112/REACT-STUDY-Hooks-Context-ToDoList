import React, {useContext} from "react";
import Task from "../task/Task";
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { TasksContext } from "../../contexts/tasks.context";

function TaskList(){

    const tasks = useContext(TasksContext);
    // const {tasks} = useContext(TasksContext);

    const taskList = tasks.map((task, idx) => (
        <Task 
            key={task.id} 
            id={task.id} 
            idx={idx} 
            dataLength={tasks.length}
            task={task.task} 
            completed={task.completed}  
        />
    ));

    if(tasks.length){
        return (
            <Paper style={{margin: '1rem 0',padding: '1rem 1rem'}}>
                <List className="TaskList-display">
                    {taskList}
                </List>
            </Paper>
        );
    }

    return null;
}

export default TaskList;