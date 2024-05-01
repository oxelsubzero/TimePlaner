import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import TaskForm from "./TaskForm";

export default function TaskCreator() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 ">
          <PlusIcon size={20} />
          Create Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <div className="my-2">
          <TaskForm
            defaultValue={{
              title: "",
              description: "",
              duedate: new Date(),
              priority: "important",
              status: "Not started",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
