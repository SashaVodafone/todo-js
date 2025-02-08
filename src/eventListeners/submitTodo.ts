import createInputError from "../components/errors/createInputError";
import createTodo from "../components/todoItem/createTodo";
import postNewTodo from "../fetch/postNewTodo";
import type { TodoInput, TodoResponse } from "../types/todo.types";

export async function submitTodo(
  event: SubmitEvent,
  inputElement: HTMLInputElement,
  formElement: HTMLElement,
) {
  event.preventDefault();
  const item = inputElement.value.trim();
  const inputError = document.getElementById("to-do-form-error");
  if (!item) {
    if (!inputError) {
      createInputError(formElement, "Please enter title for your to-do");
    }

    inputElement.value = "";
    return;
  }

  // if inputError exists when submitting valid input, remove it
  if (inputError) {
    inputError.remove();
  }
  // other field validations
  // if (item === RegExp(/^[a-zA-Z0-9]+$/)) {input.value = ""; return;};
  // function to call /todo/new
  const todo: TodoInput = {
    title: inputElement.value,
  };

  try {
    const response: string | TodoResponse = await postNewTodo(todo);
    if (typeof response === "string") {
      // console.log("error", response);
      const errorText = response.split("Error:")[1].trim();
      createInputError(formElement, errorText);
      return;
    }
    // console.log("newTodo", response);
    createTodo(response);
  } catch (error) {
    console.error(error);
  }

  inputElement.value = "";
}
