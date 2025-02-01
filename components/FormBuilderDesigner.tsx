"use client";

import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";

function FormBuilderDesigner() {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <div className="p-4 w-full max-w-[920px]">
      <div
        ref={droppable.setNodeRef}
        className={cn(
          "bg-background h-full rounded-xl flex flex-col items-center justify-center overflow-y-auto",
          droppable.isOver && "ring-2 ring-primary/20 justify-start"
        )}
      >
        {droppable.isOver && (
          <div className="w-full p-4">
            <div className="h-28 bg-primary/20 rounded-xl"></div>
          </div>
        )}
        {!droppable.isOver && (
          <p className="text-3xl text-muted-foreground font-bold">Drop here</p>
        )}
      </div>
    </div>
  );
}

export default FormBuilderDesigner;
