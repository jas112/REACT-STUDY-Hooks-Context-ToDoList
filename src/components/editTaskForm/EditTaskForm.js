import React, {useContext} from "react";
import useFormInputState from "../../hooks/useFormInputState";
import { Paper, Button, TextField } from "@mui/material";
import { DispatchContext } from "../../contexts/tasks.context";
// import { TasksContext } from "../../contexts/tasks.context";

function EditTaskForm({id, task, toggleIsEditing}){

    const dispatch = useContext(DispatchContext);
    // const {dispatch} = useContext(DispatchContext);
    // const {dispatch} = useContext(TasksContext);
    // const {editTask} = useContext(TasksContext);
    const [targetTask, updateTask, resetTask] = useFormInputState(task);

    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch({type: 'EDIT-TASK', id: id, taskUpdate: targetTask});
    //    editTask(id, targetTask);
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