import React from "react";
import useFormInputState from "../../hooks/useFormInputState";
import { Paper, Button, TextField } from "@mui/material";

function EditTaskForm({id, task, editTask, toggleIsEditing}){

    const [targetTask, updateTask, resetTask] = useFormInputState(task);

    const handleSubmit = (e) => {
       e.preventDefault();
       editTask(id, targetTask);
       resetTask();
       toggleIsEditing();
    }

    return (
        // <div styles={{margin: '1rem 0',padding: '0 1rem'}}>
            <form onSubmit={handleSubmit} style={{width: "100%"}}>
                <TextField value={targetTask} onChange={updateTask} margin='normal'label='Edit Task' fullWidth autoFocus />
                {/* <Button variant="outlined" color="primary" type='submit' fullWidth>EDIT TASK</Button> */}
                {/* <Button color="secondary" onClick={resetTask}>RESET TASK</Button> */}
            </form> 
        // </div>
    );
}

export default EditTaskForm;