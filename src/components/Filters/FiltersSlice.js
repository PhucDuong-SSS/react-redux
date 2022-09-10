// const initState = {
//   search: "",
//   status: "All",
//   prioriry: [],
// };

// const filtersReducer = (state = initState, action) => {
//   /**
//    * {
//    * "type": "",
//    * "paload" : {},
//    * }
//    */

//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         prioriry: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    prioriry: [],
  },
  reducers: {
    searchFilterChange :  (state, action) =>{
      state.search = action.payload
    },
    priorityFilterChange: (state, action)=>{
      state.prioriry = action.payload
    },
    statusFilterChange: (state,action)=>{
      state.status = action.payload
    }
  }
});
