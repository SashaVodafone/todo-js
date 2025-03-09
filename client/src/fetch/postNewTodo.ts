import { TodoInput } from "../types/todo.types";

async function postNewTodo(todo: TodoInput) {
  // console.log("body", JSON.stringify(todo));
  try {
    const response = await fetch(`${process.env.BASE_URL}/todo/new`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(todo),
    });
    // ERROR
    if (response.status !== 200) {
      return await response.text();
    }
    // SUCCESS
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
}
export { postNewTodo };
