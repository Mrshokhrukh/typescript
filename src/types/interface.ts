export interface TodoFormInterface {
  id: number;
  text: string;
  isCompleted: boolean;
  index?: number;
}

export interface TodoListInterface {
  todos: TodoFormInterface[];
  removeTodo: (id: number) => void;
}

export interface addTodo {
  addTodo: (text: string) => void;
}
