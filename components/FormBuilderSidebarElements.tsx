import React from "react";
import SidebarButtonElement from "./SidebarButtonElement";
import { FormElements } from "./FormElements";
import AiBuilderButton from "./AiBuilderButton";

function FormBuilderSidebarElements() {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-sm font-bold text-foreground/70 py-2">
          Drag and drop elements
        </p>
        <AiBuilderButton />
      </div>
      <p className="text-sm font-bold text-muted-foreground my-4">
        Layout elements
      </p>
      <div className="flex flex-wrap gap-4">
        <SidebarButtonElement formElement={FormElements.TitleField} />
        <SidebarButtonElement formElement={FormElements.SubtitleField} />
        <SidebarButtonElement formElement={FormElements.ParagraphField} />
        <SidebarButtonElement formElement={FormElements.SeparatorField} />
        <SidebarButtonElement formElement={FormElements.SpacerField} />
      </div>
      <p className="text-sm font-bold text-muted-foreground my-4">
        Form elements
      </p>
      <div className="flex flex-wrap gap-4">
        <SidebarButtonElement formElement={FormElements.TextField} />
        <SidebarButtonElement formElement={FormElements.NumberField} />
        <SidebarButtonElement formElement={FormElements.TextareaField} />
        <SidebarButtonElement formElement={FormElements.DateField} />
        <SidebarButtonElement formElement={FormElements.SelectField} />
        <SidebarButtonElement formElement={FormElements.CheckboxField} />
      </div>
    </>
  );
}

export default FormBuilderSidebarElements;
