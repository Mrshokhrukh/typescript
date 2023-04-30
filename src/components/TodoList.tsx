import React from "react";
import { TodoListInterface } from "../types/interface";
import TodoItem from "./TodoItem";

const TodoList = (props: TodoListInterface) => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={index + 1}
            index={index + 1}
            todoList={todo}
            removeTodo={props.removeTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
