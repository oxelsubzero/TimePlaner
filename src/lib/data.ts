import { Task } from "@/types";
import { unstable_noStore as noStore } from "next/cache";
import sql from "./db.mjs";

export async function getAllTasks(): Promise<Task[]> {
  noStore();
  try {
    const tasks: Task[] = await sql`SELECT * FROM tasks ORDER BY id`; // Assuming 'tasks' is your table name
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export async function getTasksByStatus(
  status: "Completed" | "In progress" | "Not started"
): Promise<Task[]> {
  noStore();
  try {
    const tasks: Task[] =
      await sql`SELECT * FROM tasks WHERE status=${status} ORDER BY id`; // Assuming 'tasks' is your table name
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}
