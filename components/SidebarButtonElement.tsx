import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

type SidebarButtonElementProps = {
  formElement: FormElement;
};

function SidebarButtonElement({ formElement }: SidebarButtonElementProps) {
  const { icon: Icon, label } = formElement.designerButtonElement;
  const draggable = useDraggable({
    id: `designer-button-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      variant="outline"
      className={cn(
        "flex flex-col h-28 w-28 cursor-grab",
        draggable.isDragging && "ring-2 ring-primary"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="!h-8 !w-8" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export function SidebarButtonElementDragOverlay({
  formElement,
}: SidebarButtonElementProps) {
  const { icon: Icon, label } = formElement.designerButtonElement;
  return (
    <Button variant="outline" className="flex flex-col h-28 w-28 cursor-grab">
      <Icon className="!h-8 !w-8" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export default SidebarButtonElement;
