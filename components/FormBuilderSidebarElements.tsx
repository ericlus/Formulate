import React from "react";
import SidebarButtonElement from "./SidebarButtonElement";
import { FormElements } from "./FormElements";
import { Separator } from "./ui/separator";

function FormBuilderSidebarElements() {
  return (
    <>
      <p className="text-sm text-foreground/70 py-2">Drag and drop elements</p>
      <Separator className="my-2" />
      <p className="text-sm text-muted-foreground my-4">Layout elements</p>
      <div className="flex flex-wrap gap-4">
        <SidebarButtonElement formElement={FormElements.TitleField} />
        <SidebarButtonElement formElement={FormElements.SubtitleField} />
        <SidebarButtonElement formElement={FormElements.ParagraphField} />
        <SidebarButtonElement formElement={FormElements.SeparatorField} />
        <SidebarButtonElement formElement={FormElements.SpacerField} />
      </div>
      <p className="text-sm text-muted-foreground my-4">Form elements</p>
      <div className="flex flex-wrap gap-4">
        <SidebarButtonElement formElement={FormElements.TextField} />
        <SidebarButtonElement formElement={FormElements.NumberField} />
        <SidebarButtonElement formElement={FormElements.TextareaField} />
        <SidebarButtonElement formElement={FormElements.DateField} />
        <SidebarButtonElement formElement={FormElements.SelectField} />
      </div>
    </>
  );
}

export default FormBuilderSidebarElements;
