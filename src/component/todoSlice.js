import { createSlice } from "@reduxjs/toolkit";
const initialState ={
   todos:[],
    // todo:null,
    filter:'All'
}
export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
             addTodo:(state,action)=>{
                // console.log(action.payload,"ishhhhhhhhh");
                console.log('Adding todo:', action.payload);

             state.todos.push({id:Date.now(), text: action.payload, completed:false});
             },
             toggleTodo:(state,action)=>{
                const todo = state.todos.find ((todo)=> todo.id === action.payload);
                if (todo) {
                    todo.completed =!todo.completed;
                }
             },
              deleteTodo:(state,action)=>{
                return state.todos.filter((todo)=> todo.id !==action.payload);
             },
    },
});
export const {addTodo,toggleTodo,deleteTodo}= todoSlice.actions
export default todoSlice.reducer