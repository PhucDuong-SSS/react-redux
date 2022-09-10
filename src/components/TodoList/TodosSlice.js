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

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: "1",
      name: "doing yoga",
      completed: false,
      prioriry: "Medium",
    },
    {
      id: "2",
      name: "play game",
      completed: true,
      prioriry: "Low",
    },
    {
      id: "3",
      name: "do excersice",
      completed: false,
      prioriry: "High",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      if (currentTodo)
        currentTodo.completed = !currentTodo.completed
    },
  },
});
