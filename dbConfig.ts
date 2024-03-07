import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

async function connection() {
  // return new sqlite3.Database('./collection.db');

  const db = (async () => (await open({
    filename: "./collection.db", // Specify the database file path
    driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
  })))();
  return db
}

export default connection()