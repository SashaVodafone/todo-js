import createDeleteButton from "../buttons/createDeleteButton.ts";
import createSeeMoreButton from "../buttons/createSeeMoreButton.ts";
import createCheckbox from "./createCheckbox.ts";

function createTodoContainer(id: string) {
  // console.log("Creating to do container", id);
  const toDoBox = document.createElement("li");
  toDoBox.classList.add("to-do-list-item");
  toDoBox.id = `to-do-item-container-${id}`;
  // add checkbox
  const checkbox = createCheckbox(id);
  toDoBox.appendChild(checkbox);
  // add button container
  const buttonContainer = document.createElement("div");
  buttonContainer.id = `to-do-button-container-${id}`;
  buttonContainer.classList.add("to-do-button-container");
  // add buttons
  const seeMoreButton = createSeeMoreButton(id);
  const deleteButton = createDeleteButton(id);
  // append buttons to div
  buttonContainer.appendChild(seeMoreButton);
  buttonContainer.appendChild(deleteButton);
  // append div to to do box
  toDoBox.appendChild(buttonContainer);
  // return element
  return toDoBox;
}

export default createTodoContainer;
