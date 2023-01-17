import {v4 as uuidv4} from 'uuid';
import {createSlice} from '@reduxjs/toolkit';
import {TodoInitialState} from './type'
const initialState: TodoInitialState = {
  todos: [
    {
      id: uuidv4(),
      title: '리덕스 툴킷',
      contents: '리덕스 툴킷 공부',
      isDone: true,
    },
    {
      id: uuidv4(),
      title: '타입스크립트',
      contents: '타입스크립트 공부',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: 'NextJS 공부',
      contents: 'NextJS 예습',
      isDone: false,
    },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => ({
      ...state,
      todos: [...state.todos, action.payload],
    }),
    deleteTodo: (state, action) => ({
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
    switchTodo: (state, action) => ({
      todos: state.todos.map((t) => {
        if (t.id === action.payload) {
          return {...t, isDone: !t.isDone};
        } else {
          return t;
        }
      }),
    }),
  },
});

export const {addTodo, deleteTodo, switchTodo} = todosSlice.actions;
export default todosSlice.reducer;
