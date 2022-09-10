import { createSelector } from "@reduxjs/toolkit";

export const searchTextSeclector = (state) => state.filters.search;
export const filterPrioritySeclector = (state) => state.filters.prioriry;
export const filterStatusSeclector = (state) => state.filters.status;
export const todoListSeclector = (state) => state.todoList;
export const todoRemainingSeclector = createSelector(
  todoListSeclector,
  filterStatusSeclector,
  filterPrioritySeclector,
  searchTextSeclector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.prioriry)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.prioriry) : true)
      );
    });
  }
);
