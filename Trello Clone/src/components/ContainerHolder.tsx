import { useTasksContainers } from "@/context/TasksContext";
import TaskContainer from "./TaskContainer";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { DialogDescription } from "./ui/dialog";
import CustomInputDialog from "./CustomInputDialog";

const ContainerHolder = () => {
   const {
      tasksContainers,
      createContainer,
      createTask,
      deleteTask,
      updateTasksParentState,
   } = useTasksContainers();

   return (
      <div className="h-[90vh] p-4 md:p-12 bg-purple-600 flex items-start justify-evenly gap-8 overflow-x-scroll trello-scrollbar">
         {tasksContainers.map((container) => (
            <TaskContainer
               key={container.id}
               containerId={container.id}
               title={container.title}
               tasksList={container.tasksList}
               createTask={createTask}
               deleteTask={deleteTask}
               updateTasksParentState={updateTasksParentState}
            />
         ))}
         <CustomInputDialog
            onSubmit={(title: string) => createContainer(title)}
            TriggerContentAsComponent={
               <Button
                  variant={"secondary"}
                  className="min-w-[80vw] sm:min-w-[28vw] opacity-90"
               >
                  <Plus /> Add Another Container
               </Button>
            }
            title="One step at a time 💪"
            description="Enter the title of the container"
            SubmitButtonContentAsComponent={
               <>
                  <Plus /> Create container
               </>
            }
            FooterContentAsComponent={
               <DialogDescription className="text-xs">
                  Clicking `Enter` to create container is a handy feature!!
               </DialogDescription>
            }
         />
      </div>
   );
};

export default ContainerHolder;
