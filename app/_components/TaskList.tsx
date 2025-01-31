'use client'
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Status, TaskItem } from './TaskItem';
import { Button } from '@mui/material';
import { TaskForm } from './TaskForm';

export interface Tasks {
    title: string;
    description: string;
    completionStatus: Status;
}
interface ITaskListProps {
    initialTasks: Tasks[];
}

export const TaskList: React.FC<React.PropsWithChildren<ITaskListProps>> = ({
    initialTasks
}) => {
    const [tasks, setTasks] = useState<Tasks[]>(initialTasks);
    const [isAddingTask, setIsAddingTask] = useState<boolean>(false);

    useEffect(() => {
        const localData = localStorage.getItem('data');
        if (localData){
            const localDataArray: Tasks[] = JSON.parse(localData);
            setTasks(localDataArray);
        }
    }, [])

    const openForm = () => {
        setIsAddingTask(true);
    }
    const closeForm = () => {
        setIsAddingTask(false);
    }

    const updateTasks = (newTask: Tasks): void => {
        const allTasks = [...tasks, newTask]
        setTasks(allTasks)
        const storedData = JSON.stringify(allTasks)
        localStorage.setItem('data', storedData)
    }

    // localStorage.clear()
    return (
        <Box sx={{ display: 'flex'}}>
            <Box>
                {tasks.map(task => (
                    <TaskItem 
                        key={task.title} 
                        title={task.title} 
                        description={task.description} 
                        completionStatus={task.completionStatus}/>
                ))}
                {!isAddingTask && (
                    <Button sx={{ m: 1 }} variant='contained' onClick={() => openForm()}>Add a task</Button>
                )}
            </Box>
            <Box sx={{ display: 'flex'}} >
                {isAddingTask && (
                    <TaskForm updateAction={updateTasks} hideFormAction={closeForm}/>
                )}
            </Box>
        </Box>
    )

};