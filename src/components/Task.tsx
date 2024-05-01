"use client";
import { Task } from "@/types";
import {
  CircleAlert,
  CircleCheck,
  Clock10,
  Loader,
  Trash2Icon,
} from "lucide-react";
import TaskEditor from "./TaskEditor";
import { Separator } from "./ui/separator";

import { Delete, updateStatus } from "@/actions/todo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MyAlertDialog } from "./Alert";

const TaskComponent = ({ task }: { task: Task }) => {
  async function upateTaskStatus(
    value: "Completed" | "In progress" | "Not started"
  ) {
    await updateStatus(task.id, value);
  }
  async function deleteTask() {
    await Delete(task.id);
  }
  return (
    <>
      <div className="my-4 grid grid-cols-5">
        <div className="flex items-center gap-5 justify-start">
          {task.title}
        </div>
        <div className="flex items-center gap-2 justify-start">
          <Clock10 size={15} color="#16a34a" /> {task.duedate.toDateString()}
        </div>
        <div className="flex items-center gap-2 justify-start">
          <Select
            onValueChange={(
              value: "Completed" | "In progress" | "Not started"
            ) => upateTaskStatus(value)}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  <div className=" flex gap-4  items-center justify-center">
                    {task.status == "Not started" && (
                      <CircleAlert size={15} color="red" />
                    )}
                    {task.status == "Completed" && (
                      <CircleCheck size={15} color="green" />
                    )}
                    {task.status == "In progress" && (
                      <Loader size={15} color="orange" />
                    )}
                    {task.status}
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Completed">
                  <div className=" flex gap-4  items-center justify-center">
                    <CircleCheck size={15} color="green" /> Completed
                  </div>
                </SelectItem>

                <SelectItem value="In progress">
                  <div className=" flex gap-4  items-center justify-center">
                    {" "}
                    <Loader size={15} color="orange" /> In progress
                  </div>
                </SelectItem>

                <SelectItem value="Not started">
                  <div className=" flex gap-4  items-center justify-center">
                    <CircleAlert size={15} color="red" /> Not started
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="text-center"> {task.priority} </div>
        <div className="flex gap-2 justify-end ">
          <TaskEditor task={task} />
          <MyAlertDialog action={deleteTask}>
            <button>
              <Trash2Icon size={15} color="red" />
            </button>
          </MyAlertDialog>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default TaskComponent;
