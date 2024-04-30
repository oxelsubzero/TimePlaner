import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Task } from "@/types";
import { PencilIcon } from "lucide-react";
import TaskForm from "./TaskForm";

export default function TaskEditor({ task }: { task: Task }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <PencilIcon size={15} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="my-2">
          <TaskForm defaultValue={task} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
