import { useState, useRef } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";

interface Props {
   onSubmit: (input: string) => void;
   TriggerContentAsComponent: React.ReactNode;
   title: string;
   description: string;
   SubmitButtonContentAsComponent: React.ReactNode;
   FooterContentAsComponent: React.ReactNode;
}

const CustomInputDialog = ({
   onSubmit,
   TriggerContentAsComponent = (
      <Button variant={"secondary"}>
         <Plus /> Add Another Container
      </Button>
   ),
   title = "One step at a time 💪",
   description,
   SubmitButtonContentAsComponent = (
      <>
         <Plus /> Create container
      </>
   ),
   FooterContentAsComponent,
}: Props) => {
   const [input, setInput] = useState("");
   const [open, setOpen] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (input.length < 2) {
         console.warn("Task input too short");
         return;
      }

      onSubmit(input);
      setOpen(false);
   };

   const handleModalOpen = () => {
      setOpen(!open);

      if (!open && inputRef.current) {
         inputRef.current.focus();
      }
   };
   return (
      <Dialog onOpenChange={handleModalOpen} open={open}>
         <DialogTrigger asChild>{TriggerContentAsComponent}</DialogTrigger>
         <DialogContent className="sm:max-w-md">
            <DialogHeader>
               <DialogTitle>{title}</DialogTitle>
               <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <form
               onSubmit={handleSubmit}
               className="flex items-center justify-center flex-col gap-3 mt-1"
            >
               <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Enter task"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
               />
               <Button type="submit" variant="secondary" className="w-full">
                  {SubmitButtonContentAsComponent}
               </Button>
            </form>
            <DialogFooter className="mt-1 sm:justify-start">
               {FooterContentAsComponent}
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default CustomInputDialog;
