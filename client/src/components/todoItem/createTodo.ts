import { TodoResponse } from "../../types/todo.types";
import createTodoContainer from "./createTodoContainer";

interface TodoItem {
  title: string;
  id: string;
  description?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

function createTodo(todo: TodoResponse) {
  // create to do box
  const toDoBox = createTodoContainer(todo.id);
  // append to do box to list
  const listContainer = document.getElementById(`to-do-list-container`);
  listContainer?.appendChild(toDoBox);
  // create to do item
  const todoTitle = document.createElement("p");
  todoTitle.textContent = todo.title;
  todoTitle.id = `to-do-item-${todo.id}`;
  todoTitle.classList.add("to-do-list-item");
  // append to do item to box before button container
  const buttonContainer = document.getElementById(
    `to-do-button-container-${todo.id}`,
  );
  toDoBox?.insertBefore(todoTitle, buttonContainer);
  // add to array and increment count
}

export default createTodo;
