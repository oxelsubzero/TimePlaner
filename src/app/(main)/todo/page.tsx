import TaskCreator from "@/components/TaskCreator";
import TaskList from "@/components/TaskList";
import { TasksSkeleton } from "@/components/skeletons/TasksSkeleton";
import { getTasksByStatus } from "@/lib/data";
import { Suspense } from "react";
export default async function Home() {
  return (
    <div className="bg-white mt-0 m-4  rounded-2xl p-6 border border-slate-200 ">
      <div className="flex justify-between font-bold text-lg">
        <h1>Task List</h1>
        <TaskCreator />
      </div>
      <div>
        <Suspense fallback={<TasksSkeleton />}>
          <TaskList title="In progress" taskLoader={getTasksByStatus} />
          <TaskList title="Not started" taskLoader={getTasksByStatus} />
          <TaskList title="Completed" taskLoader={getTasksByStatus} />
        </Suspense>
      </div>
    </div>
  );
}
