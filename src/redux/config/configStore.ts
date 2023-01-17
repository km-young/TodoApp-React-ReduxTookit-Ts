import {configureStore} from '@reduxjs/toolkit';
import TodosSlice from '../modules/todosSlice'

const store = configureStore({
  reducer: {todos: TodosSlice},
});


export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
// RootState와 Dispatch의 타입을 reducer에 state slice를 추가한 store의 타입을 추론하여 지정한 것
export default store;
