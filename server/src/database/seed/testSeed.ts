import db from "../db.ts";
import Todo from "../models/index.ts";

async function seedWithData() {
  const todoDataArray = [
    { title: "Todo 1", description: "Description 1" },
    { title: "Todo 2" },
  ];

  await db.sync({ force: true });
  await Todo.bulkCreate(todoDataArray);
}

export default seedWithData;
