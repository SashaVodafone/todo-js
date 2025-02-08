import createSvg from "../../svg/createSvg";
import { iconError } from "../../svg/icons";

function createInputError(
  parent: HTMLElement,
  errorMessage = "Please enter a valid input",
) {
  console.log("createInputError", errorMessage);
  const errorContainer = document.createElement("div");
  errorContainer.id = `${parent.id}-error`;
  errorContainer.classList.add("input-error-container");

  const errorIcon = createSvg(iconError, { width: "20px" });
  errorIcon.classList.add("input-error-icon");
  errorContainer.appendChild(errorIcon);

  const error = document.createElement("p");
  error.classList.add("input-error-message");
  error.textContent = errorMessage;
  errorContainer.appendChild(error);

  console.log("append errorContainer", errorContainer, parent);
  parent.appendChild(errorContainer);
}

export default createInputError;
