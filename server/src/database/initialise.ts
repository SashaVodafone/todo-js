import db from "./db.ts";

async function initialiseDb() {
  try {
    // await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
  return db;
}

export default initialiseDb;
