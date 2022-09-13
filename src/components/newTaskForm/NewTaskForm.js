import React, {useContext} from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useFormInputState from "../../hooks/useFormInputState";
import { TasksContext } from "../../contexts/tasks.context";

function NewTaskForm({props}){
    const [task, updateTask, resetTask] = useFormInputState('');
    const {addTask} = useContext(TasksContext);

    const handleSubmit = (e) => {
       e.preventDefault();
       addTask(task);
       resetTask();
    }

    return (
        <Paper style={{margin: '1rem 0',padding: '1rem 1rem'}}>
            <form onSubmit={handleSubmit}>
                <TextField value={task} onChange={updateTask} margin='normal'label='Add New Task' fullWidth />
                <Button variant="outlined" color="primary" type='submit' fullWidth>ADD TASK</Button>
            </form> 
        </Paper>
    );
}

export default NewTaskForm;