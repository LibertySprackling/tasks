'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 export type Status = 'complete' | 'incomplete';

interface ITaskItemProps {
    title: string;
    description: string;
    completionStatus: Status;
}

export const TaskItem: React.FC<React.PropsWithChildren<ITaskItemProps>> = ({
    title,
    description,
    completionStatus,
}) => {

    const [status, setStatus] = useState<Status>(completionStatus);
    
    const isIncomplete = status === "incomplete";

    const handleClick= () => {
        const newStatus = isIncomplete ? "complete" : "incomplete";
        setStatus(newStatus)
    }

    const getButtonText = () => {
        const buttonText = isIncomplete ? "Mark as completed" : "Mark as incomplete";
        return buttonText;
    } 

    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    <Typography>{title}</Typography>
                    <Typography>{description}</Typography>
                    <Typography>Status: {status}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleClick()}>{getButtonText()}</Button>
                </CardActions>
            </Card>
        </Box>
    )
};