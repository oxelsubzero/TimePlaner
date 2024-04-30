import { Separator } from "../ui/separator";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

function TaskSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded`}>
      <div className="grid grid-cols-4 p-3">
        <div className="flex gap-2">
          <div className="h-5 w-5 rounded-md bg-gray-200" />
          <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        </div>

        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />

        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="flex gap-2 justify-end">
          <div className="h-5 w-5 rounded-md bg-gray-200" />
          <div className="h-5 w-5 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function TasksSkeleton() {
  return (
    <div className="bg-white  mt-8 space-y-4">
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
      <Separator />
      <TaskSkeleton />
    </div>
  );
}
