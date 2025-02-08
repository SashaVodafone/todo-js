import createTodo from "./components/todoItem/createTodo";
import { submitTodo } from "./eventListeners";
import { getAllTodo } from "./fetch";
import type { TodoResponse } from "./types/todo.types";

async function main() {
  // input
  const form = document.getElementById("to-do-form");
  const input = document.getElementById("to-do-input") as HTMLInputElement;
  // to do list
  // const listContainer = document.getElementById("to-do-list-container");
  // buttons
  const getDeleteButton = (index: number) => {
    return document.getElementById(`delete-button-${index}`);
  };
  //data

  const todosArray = await getAllTodo();

  todosArray.forEach((todo: TodoResponse) => {
    createTodo(todo);
  });

  // event listeners
  form?.addEventListener("submit", (event: SubmitEvent) => {
    console.log("eventlistener input", input);
    submitTodo(event, input, form);
  });
}

main();
