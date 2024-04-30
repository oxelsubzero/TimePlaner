import { Task } from "@/types";
import { unstable_noStore as noStore } from "next/cache";
import sql from "./db.mjs";

export async function getAllTasks(): Promise<Task[]> {
  noStore();
  try {
    const tasks: Task[] = await sql`SELECT * FROM tasks`; // Assuming 'tasks' is your table name
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}
