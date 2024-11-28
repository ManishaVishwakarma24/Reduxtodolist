import React from 'react'
import { Container, Typography } from '@mui/material';
import AddTodo from './component/addTodo';
import TodoList from './component/todolist';

function App() {
  return (
    <>
    <Container maxWidth="sm" sx={{ mt: 5,backgroundColor:"#00bcd466", padding:5,borderRadius:"10px"}}>
      <Typography variant="h3" gutterBottom sx={{color:"#0592a3",fontFamily:"cursive"}}>
        Redux Todo List
      </Typography>
      <AddTodo/>
      <TodoList/>
    </Container>

    </>
  );
}

export default App;
