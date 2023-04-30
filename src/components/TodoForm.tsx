import React, { useState, useEffect } from "react";
import { addTodo } from "../types/interface";

const TodoForm = (props: addTodo) => {
  const [todoText, setTodoText] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const addedRef = React.useRef<HTMLButtonElement>(null);

  if (!isAdded) {
    if (addedRef.current) {
      addedRef.current.innerText = "Add To List";
    }
  } else {
    if (addedRef.current) {
      addedRef.current.innerText = "Added";
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  }, [isAdded]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText === "") {
      alert("write something");
    } else {
      props.addTodo(todoText);
    }

    setIsAdded(!false);
    setTodoText("");
  };
  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <button className="button" ref={addedRef}>
          Add To List
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
