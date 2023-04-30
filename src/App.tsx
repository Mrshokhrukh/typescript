import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoFormInterface } from "./types/interface";
import "./style/Style.scss";

function App() {
  const [todo, setTodo] = useState<TodoFormInterface[]>([]);
  const [listId, setlistId] = useState(1);

  const addTodo = (todoText: string) => {
    setlistId(listId + 1);
    setTodo([...todo, { text: todoText, isCompleted: false, id: listId }]);
  };
  const removeTodo = (id: number) => {
    console.log(id);
    setTodo(todo.filter((todoId) => todoId.id !== id));
  };
  return (
    <div className="App">
      <div className="input-btn">
        <TodoForm addTodo={addTodo} />
      </div>
      <TodoList todos={todo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
