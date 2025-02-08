import { Sequelize } from "sequelize";
import path from "node:path";

const __dirname = import.meta.url;

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/database.sqlite",
});

export default db;
