import { z } from "zod";

export const TaskFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  completed: z.boolean().default(false),
  dueDate: z.date(), // Optional dueDate
  priority: z
    .enum(["urgent", "important", "not urgent", "not important"])
    .default("important"),
});
