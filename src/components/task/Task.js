import React from "react";
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, Button, Checkbox } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import useToggle from "../../hooks/useToggle";
import EditTaskForm from "../editTaskForm/EditTaskForm";

function Task({id, idx, dataLength, task, completed, removeTask, toggleTaskCompleted, editTask}){ 
    const [isEditing, toggleIsEditing] = useToggle(false);
    const isNotLastElement = idx < dataLength-1;

    const handleDeleteClick = () => {
        console.log(`@task removing task with id... ${id}`);
        removeTask(id);
    }

    const handleEditClick = () => {
        console.log(`@task editing task with id... ${id}`);
        toggleIsEditing();

    }

    const handleChange = () => {
        console.log(`@task toggling task completed with id... ${id}`);
        toggleTaskCompleted(id);
    }

    return (
        <>
            <ListItem style={{height: '74px'}}>
                {isEditing ? (
                    <EditTaskForm id={id} task={task} editTask={editTask} toggleIsEditing={toggleIsEditing} style={{width: "100%"}} />
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