// const initState = [
//   {
//     id: "1",
//     name: "doing yoga",
//     completed: false,
//     prioriry: "Medium",
//   },
//   {
//     id: "2",
//     name: "play game",
//     completed: true,
//     prioriry: "Low",
//   },
//   {
//     id: "3",
//     name: "do excersice",
//     completed: false,
//     prioriry: "High",
//   },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idle",
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) currentTodo.completed = !currentTodo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let currentTodo = state.todos.find((todo) => todo.id === action.payload);
        currentTodo = action.payload

      })
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async (newTodo) => {
  const res = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
  })
  const data = await res.json();
  return data.todos
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (updateTodo) => {
  const res = await fetch('/api/updateTodo', {
    method: 'POST',
    body: JSON.stringify(updateTodo)
  })

  const data = await res.json();
  return data.todos;
})

export default filtersSlice;
// export function addTodos() {
//   return function addTodosThunk(dispatch, getState) {

//   }
// }
