import express, { Router } from "express";
import Todo from "../../database/models/todo.model.ts";

const todoRouter = Router();

todoRouter.use(express.json());

// get list of all todos
todoRouter.get("/", async (req, res) => {
  try {
    // sequelize query to get all todos
    const allTodos = await Todo.findAll();
    if (!allTodos) {
      res.status(404);
      throw new Error("No todos found");
    }
    const allTodosResponse = JSON.stringify(allTodos);
    // send response
    res.status(200).send(allTodosResponse);
  } catch (error) {
    res.send(`Error finding todos, ${error}`);
  }
});

// get todo by title
todoRouter.get("/title", async (req, res) => {
  try {
    // throw errors if required fields are missing
    if (!req.body?.title) {
      res.status(400);
      throw new Error("Title is required");
    }
    // sequelize query to get todo by title
    const todo = await Todo.findAll({ where: { title: req.body?.title } });
    // throw error if todo not found
    if (!todo) {
      res.status(404);
      throw new Error(`Todo with title ${req.body.title} not found`);
    }
    const todoResponse = JSON.stringify(todo);
    // send response
    res.status(200).send(todoResponse);
  } catch (error) {
    res
      .status(400)
      .send(`Error finding todo with title ${req.body.title}, ${error}`);
  }
});

// get a single todo by id
todoRouter.get("/id/:id", async (req, res) => {
  try {
    // throw errors if required fields are missing
    if (!req.params.id) {
      res.status(400);
      throw new Error("Id is required");
    }
    // sequelize query to get todo by id
    const todo = await Todo.findByPk(req.params.id);
    // throw error if todo not found
    if (!todo) {
      res.status(404);
      throw new Error(`Todo with id ${req.params.id} not found`);
    }
    const todoResponse = JSON.stringify(todo);
    // send response
    res.status(200).send(todoResponse);
  } catch (error) {
    res.send(`Error finding todo with id ${req.params.id}, ${error}`);
  }
});

// update a todo by id
todoRouter.put("/:id", async (req, res) => {
  try {
    // throw errors if required fields are missing
    if (!req.body) {
      res.status(400);
      throw new Error("Request body is required");
    }
    if (!req.params.id) {
      res.status(400);
      throw new Error("Id is required");
    }
    // sequelize query to get todo by id
    const todo = await Todo.findByPk(req.params.id);
    // throw error if todo not found
    if (!todo) {
      res.status(404);
      throw new Error(`Todo with id ${req.params.id} not found`);
    }
    // sequelize query to update todo
    if (req.body?.title) {
      await todo?.update({ title: req.body.title });
    }
    if (req.body?.description) {
      await todo?.update({ description: req.body.description });
    }
    const updatedTodo = JSON.stringify(todo);
    // send success response
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.send(`Error updating todo with id ${req.params.id}, ${error}`);
  }
});

todoRouter.put("/:id/complete/:boolean", async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400);
      throw new Error("Id is required");
    }
    if (!req.params.boolean) {
      res.status(400);
      throw new Error("Boolean value is required");
    }
    // sequelize query to get todo by id
    const todo = await Todo.findByPk(req.params.id);
    // throw error if todo not found
    if (!todo) {
      res.status(404);
      throw new Error(`Todo with id ${req.params.id} not found`);
    }
    // sequelize query to update todo
    await todo?.update({ completed: req.params.boolean });
    const updatedTodo = JSON.stringify(todo);
    // send success response
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.send(`Error updating todo with id ${req.params.id}, ${error}`);
  }
});

// create a new todo
todoRouter.post("/new", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400);
      throw new Error("Request body is required");
    }
    if (!req.body.title) {
      res.status(400);
      console.log(req.body);
      throw new Error(`Title is missing from ${JSON.stringify(req.body)}`);
    }
    // data validation
    // title
    if (req.body.title.length < 3) {
      res.status(400);
      throw new Error("Title must be at least 3 characters long");
    }
    // sequelize query to create new todo
    const newTodo = await Todo.create(req.body);
    const newTodoResponse = JSON.stringify(newTodo);
    // send success response
    res.status(200).send(newTodoResponse);
  } catch (error) {
    res.send(`Error creating todo, ${error}`);
  }
});

// delete a todo by id
todoRouter.delete("/:id", async (req, res) => {
  try {
    // sequelize query to get todo by id
    const todo = await Todo.findByPk(req.params.id);
    // sequelize query to delete todo
    await todo?.destroy();
    // send success response
    res.status(200).send(`Todo with id ${req.params.id} deleted`);
  } catch (error) {
    res
      .status(400)
      .send(`Error deleting todo with id ${req.params.id}, ${error}`);
  }
});

export default todoRouter;
