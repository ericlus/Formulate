import React from "react";
import SidebarButtonElement from "./SidebarButtonElement";
import { FormElements } from "./FormElements";
import { Separator } from "./ui/separator";

function FormBuilderSidebarElements() {
  return (
    <div>
      <p className="text-sm text-foreground/70 py-2">Drag and drop elements</p>
      <Separator className="my-2" />
      <p className="text-sm text-muted-foreground my-4">Layout elements</p>
      <div className="flex gap-4">
        <SidebarButtonElement formElement={FormElements.TitleField} />
        <SidebarButtonElement formElement={FormElements.TextField} />
      </div>
    </div>
  );
}

export default FormBuilderSidebarElements;
