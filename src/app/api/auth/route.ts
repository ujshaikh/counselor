import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import connection from "../../../../dbConfig";
import { open, Database } from "sqlite";
import sqlite3 from "sqlite3";

let db = null;
// Define the GET request handler function
export async function GET(req: NextApiRequest) {
    db = await open({
        filename: "./collection.db", // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    })
    // Perform a database query to retrieve all items from the "items" table
    const items = await db.all("SELECT * FROM items")

    // Return the items as a JSON response with status 200
    return NextResponse.json({ data: JSON.stringify(items) });
}