import { Task } from "@/types";
import TaskComponent from "./Task";
import { Separator } from "./ui/separator";

const tasks: Task[] = [
  {
    title: "Complete project proposal",
    description: "Write a detailed proposal for the upcoming project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Complete project proposal",
    description: "Write a detailed proposal for the upcoming project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Complete project proposal",
    description: "Write a detailed proposal for the upcoming project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Complete project proposal",
    description: "Write a detailed proposal for the upcoming project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Complete project proposal",
    description: "Write a detailed proposal for the upcoming project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Complete project proposal",
    description: "Write a detailed proposal for the upcoming project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
  {
    title: "Complete project proposal",
    description: "Write a detailed proposal for the upcoming project.",
    completed: false,
    dueDate: new Date("2024-05-10"),
    priority: "urgent",
  },
];

const TaskList = ({ title }: { title: string }) => {
  return (
    <div className="h-[40%] overflow-hidden">
      <div className="pt-8 space-y-4">
        <h1 className="font-bold text-lg ">{title}</h1>
        <Separator />
      </div>
      <div>
        {tasks.map((task, index) => (
          <TaskComponent task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
