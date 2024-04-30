import { getAllTasks } from "@/lib/data";
import TaskComponent from "./Task";
import { Separator } from "./ui/separator";

const TaskList = async ({ title }: { title: string }) => {
  const tasks = await getAllTasks();
  return (
    <div className="h-[40%] overflow-hidden">
      <div className="pt-6 space-y-3">
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
