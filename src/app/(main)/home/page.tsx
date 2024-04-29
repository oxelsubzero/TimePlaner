"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Task List</h1>
        <Button variant="outline">
          <PlusIcon />
          Create Task
        </Button>
      </div>
    </div>
  );
}
