import { TodoResponse } from "../../types/todo.types";
import createSeeMoreContainer from "./createSeeMoreContainer";
import createTitleContainer from "./createTitleContainer";

function createTodo(todo: TodoResponse) {
  // create to do box
  const todoBox = document.createElement("li");
  todoBox.classList.add("to-do-list-item");
  todoBox.id = `to-do-item-container-${todo.id}`;
  // append to do box to list
  const listContainer = document.getElementById(`to-do-list-container`);
  listContainer?.appendChild(todoBox);
  // create see less container
  const todoTitleContainer = createTitleContainer(todo);
  // create see more container
  const seeMoreContainer = createSeeMoreContainer(todo.id, todo.description);

  todoBox.appendChild(todoTitleContainer);
  todoBox.appendChild(seeMoreContainer);

  // add to array and increment count
}

export default createTodo;
