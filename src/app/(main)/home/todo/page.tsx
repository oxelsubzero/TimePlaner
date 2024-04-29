"use client";

import TaskList from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white mt-0 m-5  rounded-2xl p-12 border-4 border-slate-200 ">
      <div className="flex justify-between font-bold text-lg">
        <h1>Task List</h1>
        <Button className="gap-2 ">
          <PlusIcon size={20} />
          Create Task
        </Button>
      </div>
      <div>
        <TaskList title="ToDo" />
        <TaskList title="Completed" />
      </div>
    </div>
  );
}
