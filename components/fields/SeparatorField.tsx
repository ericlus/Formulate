"use client";

import { RiSeparator } from "react-icons/ri";
import { ElementsType, FormElement } from "../FormElements";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const type: ElementsType = "SeparatorField";

export const SeparatorFieldFormElement: FormElement = {
  type,
  designerButtonElement: {
    icon: RiSeparator,
    label: "Separator Field",
  },
  construct: (id: string) => ({
    id,
    type,
  }),
  designerComponent: DesignerComponent,
  propertiesComponent: PropertiesComponent,
  formComponent: FormComponent,
  validate: () => true,
};

function DesignerComponent() {
  return (
    <div className="flex flex-col gap-1">
      <Label className="font-bold text-xs text-muted-foreground">
        Separator field
      </Label>
      <Separator className="my-2" />
    </div>
  );
}

function PropertiesComponent() {
  return <p>No properties for this element.</p>;
}

function FormComponent() {
  return <Separator />;
}
