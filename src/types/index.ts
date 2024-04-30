export interface Task {
  title: string;
  description: string | undefined;
  completed: boolean;
  dueDate: Date;
  priority: "urgent" | "important" | "not urgent" | "not important";
}
