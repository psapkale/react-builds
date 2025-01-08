import { ITask } from "@/context/TasksContext";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

interface Props {
   task: ITask;
   parentId: number;
   handleDeleteTask: (taskId: number) => void;
}

const TaskTab = ({ task, parentId, handleDeleteTask }: Props) => {
   const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.currentTarget.classList.add("scale-[0.96]");
      e.currentTarget.classList.add("opacity-90");
   };

   const handleDragStart = (e: React.DragEvent) => {
      e.dataTransfer.setData(
         "taskTransferData",
         JSON.stringify({
            taskId: task.id,
            parentId: parentId,
         })
      );
   };

   const handleDragEnd = (e: React.DragEvent) => {
      e.currentTarget.classList.remove("scale-[0.96]");
      e.currentTarget.classList.remove("opacity-90");
   };

   return (
      <div
         className="w-full border border-[rgba(203,213,225,0.9)] rounded-md py-2 px-2 flex items-center justify-between group transition-all duration-100 cursor-pointer"
         draggable
         onDragStart={handleDragStart}
         onDrag={handleDrag}
         onDragEnd={handleDragEnd}
      >
         <h1>{task.content}</h1>
         <Button
            variant={"secondary"}
            className="w-8 h-8 self-end opacity-0 group-hover:opacity-100 transition-opacity duration-100"
            onClick={() => handleDeleteTask(task.id)}
         >
            <Trash />
         </Button>
      </div>
   );
};

export default TaskTab;
