import { deleteTodo } from "../../fetch";
import createSvg from "../../svg/createSvg.ts";
import { iconClose } from "../../svg/icons.ts";

function createDeleteButton(id: string) {
  const deleteButton = document.createElement("button");
  deleteButton.id = `delete-button-${id}`;
  deleteButton.classList.add("svg-button");
  deleteButton.classList.add("delete");

  const iconCloseSvg = createSvg(iconClose);
  iconCloseSvg.classList.add("svg-icon");
  iconCloseSvg.classList.add("delete");
  deleteButton.appendChild(iconCloseSvg);

  deleteButton.onclick = async () => {
    // fetch DELETE request
    await deleteTodo(id);
    const toDoItem = document.getElementById(`to-do-item-container-${id}`);
    toDoItem?.remove();
  };

  return deleteButton;
}

export default createDeleteButton;
