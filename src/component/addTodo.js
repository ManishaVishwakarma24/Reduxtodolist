import React, { useState } from 'react'
import { Box,TextField,Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
// import { todo } from 'node:test';
const AddTodo = () => {
    const [text,setText]= useState('');
    const dispatch = useDispatch();
    const handleSubmit =()=>{
        if(text.trim()){
            dispatch(addTodo(text));
            setText('');
        }
    };
  return (
    <>
    <Box component="form" sx={{mb:2, display:'flex', gap:2, }}>
<TextField label = "Add a new Todo"
variant="outlined" value={text} onChange={(e)=> setText(e.target.value)}
fullWidth

/>

<Button variant="contained"
onClick={()=>handleSubmit()} sx={{backgroundColor:"#1898a7"}}  >
        Add
      </Button>
    </Box>
    </>
  )
}

export default AddTodo;