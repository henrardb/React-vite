import { createContext, useContext } from "react";

// Create the context and the variable/methods we want to save
export const TodoContext = createContext({
  todos: [
    {
      id: 0,
      todo: "Todo message",
      done: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleDone: (id) => {},
});

// Made the Provider available for all components
export const TodoProvider = TodoContext.Provider;

// Create a function to speed up the use of the context
export const useTodo = () => {
  return useContext(TodoContext);
};
