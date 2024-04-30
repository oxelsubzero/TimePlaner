import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/types";
import { Clock10, Trash2Icon } from "lucide-react";
import TaskEditor from "./TaskEditor";
import { Separator } from "./ui/separator";

const TaskComponent = ({ task }: { task: Task }) => {
  return (
    <>
      <div className="my-4 grid grid-cols-4">
        <div className="flex items-center gap-5 justify-start">
          <Checkbox />
          {task.title}
        </div>
        <div className="flex items-center gap-2 justify-start">
          <Clock10 size={15} color="#16a34a" />{" "}
          {task.due_date.toDateString() /* TODO : CHANGE due_date to dueDate */}
        </div>
        <div className="text-center"> {task.priority} </div>
        <div className="flex gap-2 justify-end ">
          <TaskEditor task={task} />
          <button>
            <Trash2Icon size={15} color="red" />
          </button>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default TaskComponent;
