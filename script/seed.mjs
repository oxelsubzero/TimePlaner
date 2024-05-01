import sql from "../src/lib/db.mjs";
import { tasks } from "./data.mjs";

// Define the SQL query to create the 'tasks' table
/*const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duedate DATE,
    priority VARCHAR(20) CHECK (priority IN ('urgent', 'important', 'not urgent', 'not important')),
    status VARCHAR(30) CHECK (status IN ('Completed','In progress','Not started'))
  )
`;

// Execute the SQL query to create the 'tasks' table
sql
  .unsafe(createTableQuery)
  .then(() => {
    console.log("Tasks table created successfully");
    // You can perform additional actions here if needed
  })
  .catch((error) => {
    console.error("Error creating tasks table:", error);
  });
*/
// Array of 10 sample tasks

async function insertTasks(task) {
  try {
    const _task = await sql`
        INSERT INTO tasks (title, description, duedate, priority, status)
        VALUES (${task.title}, ${task.description}, ${task.dueDate}, ${task.priority}, ${task.status})
        returning title, duedate
      `;
    console.log(_task);
  } catch (error) {
    console.error("Error inserting tasks:", error);
  }
}

tasks.map(async (task) => {
  await insertTasks(task);
});
