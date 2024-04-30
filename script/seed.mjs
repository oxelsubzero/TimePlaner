import sql from "../src/lib/db.mjs";

// Define the SQL query to create the 'tasks' table
/*const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN NOT NULL DEFAULT false,
    due_date DATE,
    priority VARCHAR(20) CHECK (priority IN ('urgent', 'important', 'not urgent', 'not important'))
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
const tasks = [
  {
    title: "Complete project report",
    description: "Finish the project report and submit it by the deadline.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Prepare presentation slides",
    description:
      "Create slides for the project presentation scheduled next week.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "important",
  },
  {
    title: "Review feedback from supervisor",
    description:
      "Review the feedback provided by the supervisor and incorporate necessary changes.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "not urgent",
  },
  {
    title: "Attend team meeting",
    description:
      "Participate in the weekly team meeting to discuss project progress and updates.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "not important",
  },
  {
    title: "Research new technology trends",
    description:
      "Explore latest trends and advancements in technology relevant to the project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "important",
  },
  {
    title: "Write documentation",
    description:
      "Document the project requirements, design, and implementation details.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Test application functionality",
    description:
      "Perform comprehensive testing to ensure all features work as expected.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "not urgent",
  },
  {
    title: "Meet with client for feedback",
    description:
      "Schedule a meeting with the client to gather feedback on the project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "important",
  },
  {
    title: "Update project timeline",
    description:
      "Revise the project timeline based on current progress and upcoming tasks.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "not important",
  },
  {
    title: "Deploy application to production",
    description:
      "Deploy the completed application to the production environment.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
];

async function insertTasks(task) {
  try {
    console.log("Inserting task:", task);
    const _task = await sql`
        INSERT INTO tasks (title, description, completed, due_date, priority)
        VALUES (${task.title}, ${task.description}, ${task.completed}, ${task.dueDate}, ${task.priority})
        returning title, due_date
      `;
    console.log("SQL query:", _task);
  } catch (error) {
    console.error("Error inserting tasks:", error);
  }
}

tasks.map((task) => {
  insertTasks(task);
});
