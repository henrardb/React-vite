import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeTodo(id));
  }

  return (
    <div>
      <h1>Todo</h1>
      {todos.map((todo) => (
        <div>
          <h2 key={todo.id}>{todo.text}</h2>
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
