import React from "react";
import { TodoFormInterface } from "../types/interface";
import { AiOutlineCloseCircle } from "react-icons/ai";
interface todo {
  todoList: TodoFormInterface;
  removeTodo: (id: number) => void;
  index: number;
}
const TodoItem = (props: todo) => {
  return (
    <div className="list">
      <span>
        {props.index}. {props.todoList.text}{" "}
      </span>
      <div className="icons">
        <span onClick={() => props.removeTodo(props.todoList.id)}>
          <AiOutlineCloseCircle />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
