"use client";

import React, { useState } from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Button } from "./ui/button";
import { BiSolidTrash } from "react-icons/bi";
import useDesigner from "./hooks/useDesigner";
import { cn } from "@/lib/utils";

type DesignerElementWrapperProps = {
  element: FormElementInstance;
};

function DesignerElementWrapper({ element }: DesignerElementWrapperProps) {
  const { removeElement, selectedElement, setSelectedElement } = useDesigner();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.id,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });
  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.id,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });
  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
    },
  });
  if (draggable.isDragging) {
    return null;
  }
  const DesignerElement = FormElements[element.type].designerComponent;
  const isSelectedElement = selectedElement?.id === element.id;
  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
      className={cn(
        "flex flex-col rounded-md bg-accent/40 p-4 relative border justify-center",
        isSelectedElement && "ring-2 ring-primary/80"
      )}
    >
      <div
        ref={topHalf.setNodeRef}
        className={cn(
          "absolute h-1/2 w-full top-0 left-0 rounded-t-md",
          topHalf.isOver && "border-t-4 border-t-foreground"
        )}
      />
      <div
        ref={bottomHalf.setNodeRef}
        className={cn(
          "absolute h-1/2 w-full bottom-0 left-0 rounded-b-md",
          bottomHalf.isOver && "border-b-4 border-b-foreground"
        )}
      />
      <div
        className={cn(
          "pointer-events-none",
          isMouseOver && !isSelectedElement && "opacity-30"
        )}
      >
        <DesignerElement elementInstance={element} />
      </div>
      {isMouseOver && !isSelectedElement && (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <p className="text-muted-foreground text-sm">
              Click for properties or drag to move
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full">
            <Button
              variant="outline"
              className="h-full border rounded-md rounded-l-none bg-red-500"
              onClick={(e) => {
                e.stopPropagation();
                removeElement(element.id);
                if (isSelectedElement) {
                  setSelectedElement(null);
                }
              }}
            >
              <BiSolidTrash className="!h-6 !w-6" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default DesignerElementWrapper;
