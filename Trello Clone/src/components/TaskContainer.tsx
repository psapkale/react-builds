import { ITask } from "@/context/TasksContext";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import TaskTab from "./TaskTab";
import { DialogDescription } from "./ui/dialog";
import CustomInputDialog from "./CustomInputDialog";

interface Props {
   containerId: number;
   title: string;
   tasksList: ITask[];
   createTask: (content: string, parentId: number) => void;
   deleteTask: (taskId: number, parentId: number) => void;
   updateTasksParentState: (
      taskId: number,
      parentId: number,
      newParentId: number
   ) => void;
}

const TaskContainer = ({
   containerId,
   title,
   tasksList,
   createTask,
   deleteTask,
   updateTasksParentState,
}: Props) => {
   const handleDeleteTask = (taskId: number) => {
      deleteTask(taskId, containerId);
   };

   const handleDrop = (e: React.DragEvent) => {
      const { taskId, parentId } = JSON.parse(
         e.dataTransfer.getData("taskTransferData")
      );

      updateTasksParentState(taskId, parentId, containerId);
   };

   const handleOnDragOver = (e: React.DragEvent) => {
      e.preventDefault();
   };

   return (
      <Card
         className="min-w-[80vw] sm:min-w-[28vw] bg-white"
         onDrop={handleDrop}
         onDragOver={handleOnDragOver}
      >
         <CardHeader>
            <CardTitle className="capitalize">{title}</CardTitle>
         </CardHeader>
         <CardContent className="flex items-center justify-center gap-2 flex-col">
            {!tasksList.length ? (
               <span className="text-xs text-gray-500">
                  Great, nothing to do in here 🏔
               </span>
            ) : (
               tasksList.map((task) => (
                  <TaskTab
                     key={task.id}
                     task={task}
                     parentId={containerId}
                     handleDeleteTask={handleDeleteTask}
                  />
               ))
            )}
         </CardContent>
         <CardFooter>
            <CustomInputDialog
               onSubmit={(input: string) => {
                  createTask(input, containerId);
               }}
               TriggerContentAsComponent={
                  <Button variant="secondary" className="w-full">
                     <Plus /> Add another task
                  </Button>
               }
               title="Let's get this done 🚀"
               description=" Enter the content of the task"
               SubmitButtonContentAsComponent={
                  <>
                     <Plus /> Add task
                  </>
               }
               FooterContentAsComponent={
                  <DialogDescription className="text-xs">
                     Clicking `Enter` to create task is a handy feature!!
                  </DialogDescription>
               }
            />
         </CardFooter>
      </Card>
   );
};

export default TaskContainer;
