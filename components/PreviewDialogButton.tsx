import React from "react";
import { Button } from "./ui/button";
import { MdPreview } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import useDesigner from "./hooks/useDesigner";
import { FormElements } from "./FormElements";

function PreviewDialogButton() {
  const { elements } = useDesigner();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <MdPreview className="!h-5 !w-5" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
        <DialogHeader className="p-4">
          <DialogTitle>Form Preview</DialogTitle>
          <DialogDescription>
            This is how your form will look like to your users.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-grow py-4 justify-center bg-[length:50px_50px] bg-repeat bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)] overflow-y-auto">
          <div className="max-w-[920px] flex flex-col gap-2 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
            {elements.map((element) => {
              const FormElement = FormElements[element.type].formComponent;
              return <FormElement key={element.id} elementInstance={element} />;
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PreviewDialogButton;
