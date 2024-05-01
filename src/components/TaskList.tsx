import { Task } from "@/types";
import TaskComponent from "./Task";
import { Separator } from "./ui/separator";

const TaskList = async ({
  title,
  taskLoader,
}: {
  title: "Completed" | "In progress" | "Not started";
  taskLoader: (
    status: "Completed" | "In progress" | "Not started"
  ) => Promise<Task[]>;
}) => {
  const tasks = await taskLoader(title);
  return (
    <div className="h-[40%] overflow-hidden">
      <div className="pt-12 space-y-3">
        <h1 className="font-bold text-lg ">{title}</h1>
        <Separator />
      </div>
      <div>
        {tasks.map((task, index) => (
          <TaskComponent task={task} key={task.title} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
