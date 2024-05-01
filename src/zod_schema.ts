import { z } from "zod";

const TaskFormSchema1 = z.object({
  id: z.number(),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().default(" "),
  duedate: z.date(),
  priority: z
    .enum(["urgent", "important", "not urgent", "not important"])
    .default("important"),
  status: z
    .enum(["Completed", "In progress", "Not started"])
    .default("Not started"),
});

export const TaskFormSchema = TaskFormSchema1.omit({ id: true });
