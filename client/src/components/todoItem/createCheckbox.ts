import { completeTodo } from "../../fetch";

function createCheckbox(id: string, isComplete: boolean = false) {
  const div = document.createElement("div");
  div.classList.add("to-do-checkbox-container");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `to-do-checkbox-${id}`;
  checkbox.ariaLabel = "Check when complete";
  checkbox.checked = isComplete;

  checkbox.addEventListener("change", async () => {
    // fetch PATCH request
    await completeTodo(id, checkbox.checked);
    const todoItemContainer = document.getElementById(
      `to-do-item-container-${id}`,
    );
    todoItemContainer?.classList.toggle("completed");
  });

  div.appendChild(checkbox);

  return div;
}

export default createCheckbox;
