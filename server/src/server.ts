import express from "express";
import cors from "cors";

import todoRouter from "./express/routes/todo.routes.ts";
import initialiseDb from "./database/initialise.ts";

const port = process.env.PORT || 3000;

async function runServer() {
  await initialiseDb();

  const app = express();

  app.use(cors());
  app.use("/todo", todoRouter);

  // app.get("/todos", (req, res) => {});
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

runServer();
