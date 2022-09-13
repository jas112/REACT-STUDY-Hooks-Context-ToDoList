import React from "react";
import useTaskState from "../../hooks/useTaskState";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import NewTaskForm from "../newTaskForm/NewTaskForm";
import TaskList from "../taskList/TaskList";
import { TaskProvider } from "../../contexts/tasks.context";


function TaskApp(){

    const initialTaskData = [{id: 0, task: 'Add tasks to this list', completed: false}];

    // const {tasks, addTask, removeTask, toggleTaskCompleted, editTask} = useTaskState(initialTaskData);

    {/* TaskApp Background image by Maxim Berg on Unsplash. */}

    return (
        <div 
            style={{
                padding: '0',
                margin: '0',
                height: '100vh',
                width: '100vw',
                textAlign: 'center',
                backgroundColor: '#313131',
                backgroundImage: `url(/images/maxim-berg-BG.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',

            }}
            elevation={0}
        >
            {/* Background image by Maxim Berg on Unsplash. */}
            <AppBar 
                color="primary" 
                position="static" 
                style={{
                    height: '64px', 
                    backgroundColor: '#daa520',
                    backgroundImage: `url(/images/maxim-berg-BG-AB.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat', 
                    color: '#212020'
                }}
            >
               <Toolbar>
                    <Typography variant="h5">
                        Task List with Hooks and Context
                    </Typography>
               </Toolbar>
            </AppBar>
            
            <Grid container justifyContent='center' alignItems='center' style={{textAlign: 'center', marginTop: '1rem'}}>
                <Grid item xs={12} md={8} lg={4} style={{backgroundColor: '#161616ff', padding: '.2rem 1rem', borderRadius: '10px'}}>
                    <TaskProvider>
                        <NewTaskForm />
                        <TaskList />
                    </TaskProvider>
                </Grid>
            </Grid>
   
        </div>
    );
}

export default TaskApp;