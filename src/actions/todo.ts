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
      INSERT INTO tasks (title, description,  duedate, priority, status)
      VALUES (${validatedTask.title}, ${validatedTask.description},  ${validatedTask.duedate}, ${validatedTask.priority}, ${validatedTask.status})
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

export async function update(task: Task, id: number) {
  try {
    // Validate the task data against the schema
    const validationResult = TaskFormSchema.safeParse(task);
    if (validationResult.success) {
      const validatedTask = validationResult.data;
      // Insert the validated task into the database
      /*TODO: corrige the sql error here  */
      await sql`
      UPDATE tasks
      SET
        title = ${task.title},
        description = ${task.description},
        duedate = ${task.duedate},
        priority = ${task.priority},
        status = ${task.status}
      WHERE id = ${id}
    `;

      revalidatePath("/todo");
      return true;
    } else {
      // If validation fails, log the validation errors and throw an error
      console.error("Validation failed:", validationResult.error.errors);
      throw new Error("Validation failed");
    }
  } catch (error) {
    throw new Error("Task creation failed");
  }
}

export async function updateStatus(
  id: number,
  status: "Completed" | "In progress" | "Not started"
) {
  try {
    // Construct the SQL query to update the status of the task with the given id
    await sql`
      UPDATE tasks
      SET status = ${status}
      WHERE id = ${id}
    `;
    revalidatePath("/todo");
    console.log(`Status updated successfully for task with id ${id}`);
  } catch (error) {
    throw new Error(`Failed to update status for task with id ${id}`);
  }
}

export async function Delete(id: number) {
  try {
    // Construct the SQL query to update the status of the task with the given id
    await sql`
      DELETE FROM tasks
      WHERE id = ${id}
    `;
    revalidatePath("/todo");
  } catch (error) {
    throw new Error(`Failed to update status for task with id ${id}`);
  }
}
