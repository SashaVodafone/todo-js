function createCheckbox(id: string) {
  // console.log("Creating checkbox", id);
  const div = document.createElement("div");
  div.classList.add("to-do-checkbox-container");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `to-do-checkbox-${id}`;
  checkbox.ariaLabel = "Check when complete";
  // add event listener

  div.appendChild(checkbox);

  return div;
}

export default createCheckbox;
