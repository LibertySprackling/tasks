import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Status, TaskItem } from './TaskItem';

export interface Tasks {
    title: string;
    description: string;
    completionStatus: Status;
}
interface ITaskListProps {
    tasks: Tasks[];
}

export const TaskList: React.FC<React.PropsWithChildren<ITaskListProps>> = ({
    tasks
}) => {
    return (
        <Container maxWidth="sm">
            <Box>
                {tasks.map(task => (
                    <TaskItem 
                        key={task.title} 
                        title={task.title} 
                        description={task.description} 
                        completionStatus={task.completionStatus}/>
                ))}
            </Box>
        </Container>
    )

};