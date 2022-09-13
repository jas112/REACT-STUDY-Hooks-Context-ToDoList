import React, {useContext} from "react";
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, Button, Checkbox, useControlled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import useToggle from "../../hooks/useToggle";
import EditTaskForm from "../editTaskForm/EditTaskForm";
import { TasksContext } from "../../contexts/tasks.context";

function Task({id, idx, dataLength, task, completed}){ 
    const {dispatch} = useContext(TasksContext);
    // const {removeTask, toggleTaskCompleted} = useContext(TasksContext);
    const [isEditing, toggleIsEditing] = useToggle(false);
    const isNotLastElement = idx < dataLength-1;

    const handleDeleteClick = () => {
        console.log(`@task removing task with id... ${id}`);
        dispatch({type: 'REMOVE-TASK', id: id});
        // removeTask(id);
    }

    const handleEditClick = () => {
        console.log(`@task editing task with id... ${id}`);
        toggleIsEditing();

    }

    const handleChange = () => {
        console.log(`@task toggling task completed with id... ${id}`);
        dispatch({type: 'TOGGLE-TASK-COMPLETED', id: id});
        // toggleTaskCompleted(id);
    }

    return (
        <>
            <ListItem style={{height: '74px'}}>
                {isEditing ? (
                    <EditTaskForm id={id} task={task} toggleIsEditing={toggleIsEditing} style={{width: "100%"}} />
                ) : (
                    <>
                        <Checkbox tabIndex={-1} checked={completed} onChange={handleChange} />
                        <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete Task" onClick={handleDeleteClick}>
                                <Delete />
                            </IconButton>
                            <IconButton aria-label="Edit Task" onClick={handleEditClick}>
                                <Edit />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}

            </ListItem>
            { isNotLastElement ? (<Divider/>) : null}
        </>

    );
}

export default Task;