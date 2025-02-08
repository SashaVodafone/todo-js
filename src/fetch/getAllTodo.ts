async function getAllTodo() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/todo/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "text/html",
        Accept: "text/html",
      },
    });
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // console.log("response", todosResponse);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
export default getAllTodo;
