'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Tasks } from './TaskList';
import { Status } from './TaskItem';

interface ITaskFormProps {
    updateAction: (newTask: Tasks) => void;
    hideFormAction: () => void;
}

export const TaskForm: React.FC<React.PropsWithChildren<ITaskFormProps>> = ({ updateAction, hideFormAction }) => {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<Status>('incomplete');

    const textFieldStyles = {
        background: 'white', 
    }

    const handleSubmit = () => {
        const newTask = {
            title: title,
            description: description,
            completionStatus: status
        }
        updateAction(newTask);
        hideFormAction();
    }

    return (
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch', display: 'flex'}}}
        noValidate
        autoComplete="off"
        >
            <TextField sx={textFieldStyles} id="title" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <TextField sx={textFieldStyles} id="description" label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <FormControl fullWidth>
                <InputLabel id="status-select">Status</InputLabel>
                <Select sx={textFieldStyles} 
                labelId="status-select-label"
                id="status-select-field"
                value={status}
                label="Status"
                onChange={(e) => setStatus(e.target.value as Status)}
                >
                    <MenuItem sx={textFieldStyles} value={'incomplete'}>Incomplete</MenuItem>
                    <MenuItem sx={textFieldStyles} value={'complete'}>Complete</MenuItem>
                </Select>
            </FormControl>
            <Button variant='contained' onClick={() => handleSubmit()}>Submit</Button>
        </Box>

    )
}