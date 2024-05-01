export interface Task {
  id: number;
  title: string;
  description: string;
  duedate: Date;
  priority: "urgent" | "important" | "not urgent" | "not important";
  status: "Completed" | "In progress" | "Not started";
}
