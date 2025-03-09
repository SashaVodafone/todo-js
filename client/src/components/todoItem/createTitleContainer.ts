import { TodoResponse } from "../../types/todo.types.ts";
import createDeleteButton from "../buttons/createDeleteButton.ts";
import createSeeMoreButton from "../buttons/createSeeMoreButton.ts";
import createCheckbox from "./createCheckbox.ts";

function createTitleContainer(todo: TodoResponse) {
  // create see less container
  const todoTitleContainer = document.createElement("div");
  todoTitleContainer.id = `to-do-title-${todo.id}`;
  todoTitleContainer.classList.add("to-do-title");
  // add checkbox
  const checkbox = createCheckbox(todo.id, todo.completed);
  todoTitleContainer.appendChild(checkbox);
  // add button container
  const buttonContainer = document.createElement("div");
  buttonContainer.id = `to-do-button-container-${todo.id}`;
  buttonContainer.classList.add("to-do-button-container");
  // add buttons
  const seeMoreButton = createSeeMoreButton(todo.id);
  const deleteButton = createDeleteButton(todo.id);
  // append buttons to div
  buttonContainer.appendChild(seeMoreButton);
  buttonContainer.appendChild(deleteButton);
  // append div to to do box
  todoTitleContainer.appendChild(buttonContainer);
  // create to do item
  const todoTitle = document.createElement("p");
  todoTitle.textContent = todo.title;
  todoTitle.id = `to-do-item-${todo.id}`;
  todoTitle.classList.add("to-do-list-item");
  if (todo.completed) {
    const todoItemContainer = document.getElementById(
      `to-do-item-container-${todo.id}`,
    );
    todoItemContainer?.classList.add("completed");
  }
  // append to do item to box before button container

  todoTitleContainer?.insertBefore(todoTitle, buttonContainer);
  return todoTitleContainer;
}

export default createTitleContainer;
