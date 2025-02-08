import { deleteTodo } from "../../fetch";
import createSvg from "../../svg/createSvg.ts";
import { iconBin } from "../../svg/icons.ts";

function createDeleteButton(id: string) {
  // console.log("Creating delete", id);
  // create button
  const deleteButton = document.createElement("button");
  deleteButton.id = `delete-button-${id}`;
  deleteButton.classList.add("svg-button");
  // add svg
  const iconBinSvg = createSvg(iconBin);
  iconBinSvg.classList.add("svg-icon");
  iconBinSvg.classList.add("delete");

  deleteButton.appendChild(iconBinSvg);
  // add on click function
  deleteButton.onclick = async () => {
    // fetch request to delete to do item
    await deleteTodo(id);
    // delete to do item
    const toDoItem = document.getElementById(`to-do-item-container-${id}`);
    toDoItem?.remove();
  };
  // return button
  return deleteButton;
}

export default createDeleteButton;
