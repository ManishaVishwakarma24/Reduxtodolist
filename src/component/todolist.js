import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo,deleteTodo } from './todoSlice'
import { List, ListItem, ListItemText, IconButton, Checkbox, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos || [])
    console.log(todos)
    const dispatch = useDispatch()
  return (
    <>
    <Box>
{todos.length > 0 ? (
  <List  >

{todos.map((todo)=>(

 <ListItem key ={todo.id} disableGutters sx={{backgroundColor:'#0bcddf'}}> 
<Checkbox 
checked ={todo.completed}
onChange ={()=> dispatch(toggleTodo(todo.id))}
/>
<ListItemText primary={todo.text}
sx={{textDecoration: todo.completed ? 'line-through':'none'}}/>
<IconButton  onClick={()=> dispatch(deleteTodo(todo.id))}>
<DeleteIcon sx={{color:"azure"}}/>
</IconButton>
 </ListItem>   
))}
</List>
) : (
 <Typography variant='p' sx={{fontSize:"20px",backgroundColor:"azure",color:"#237d9b",padding:"5px",
  display:"flex",justifyContent:"center",alignItems:"center"
 }}>No Task</Typography>
)}
</Box>
    </>
  )
}

export default TodoList;