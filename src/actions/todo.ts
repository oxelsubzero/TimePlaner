"use server";
import sql from "@/lib/db.mjs";
import { Task } from "@/types";
import { TaskFormSchema } from "@/zod_schema";
import { revalidatePath } from "next/cache";

export async function create(task: Task) {
  try {
    // Validate the task data against the schema
    const validationResult = TaskFormSchema.safeParse(task);
    if (validationResult.success) {
      const validatedTask = validationResult.data;
      // Insert the validated task into the database
      /*TODO: corrige the sql error here  */
      await sql`
      INSERT INTO tasks (title, description, completed, due_date, priority)
      VALUES (${validatedTask.title}, ${validatedTask.description}, ${validatedTask.completed}, ${validatedTask.dueDate}, ${validatedTask.priority})
    `;
      revalidatePath("/todo");
      return true;
    } else {
      // If validation fails, log the validation errors and throw an error
      console.error("Validation failed:", validationResult.error.errors);
      throw new Error("Validation failed");
    }
  } catch (error) {
    // Handle any errors that occur during database insertion
    console.error("Error inserting task:", error);
    throw new Error("Task creation failed");
  }
}
