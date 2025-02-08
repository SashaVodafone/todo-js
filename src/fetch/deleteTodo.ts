async function deleteTodo(id: string) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/todo/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "text/html",
        Accept: "text/html",
      },
    });
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("response", response);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
export default deleteTodo;
