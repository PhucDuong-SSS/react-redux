// import filtersReducer from "../components/Filters/FiltersSlice";
// import todoListReducer from "../components/TodoList/TodosSlice";
// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
  //   filters: filtersReducer,
  //   todoList: todoListReducer,
  // });
  
  // export default rootReducer;
  
import {configureStore} from "@reduxjs/toolkit"
import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";
const rootReducer = configureStore({
  reducer: {
    filters:  filtersReducer,
    todoList:  todoListReducer,
  }
})

export default rootReducer;

