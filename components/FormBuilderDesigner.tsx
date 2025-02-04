"use client";

import { cn } from "@/lib/utils";
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { ElementsType, FormElements } from "./FormElements";
import { idGenerator } from "@/lib/idGenerator";
import useDesigner from "./hooks/useDesigner";
import DesignerElementWrapper from "./DesignerElementWrapper";

function FormBuilderDesigner() {
  const { elements, addElement } = useDesigner();
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active || !over) {
        return;
      }
      const isDesignerButtonElement =
        active.data?.current?.isDesignerButtonElement;

      if (isDesignerButtonElement) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );
        addElement(0, newElement);
      }
    },
  });

  return (
    <div className="p-4 w-full max-w-[920px]">
      <div
        ref={droppable.setNodeRef}
        className={cn(
          "bg-background h-full rounded-xl flex flex-col overflow-y-auto relative p-4 gap-2",
          droppable.isOver && "ring-2 ring-primary/20"
        )}
      >
        {droppable.isOver && elements.length === 0 && (
          <div className="w-full h-28 bg-primary/20 rounded-xl"></div>
        )}
        {!droppable.isOver && elements.length === 0 && (
          <p className="text-3xl text-muted-foreground font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Drop here
          </p>
        )}
        {elements.length > 0 && (
          <>
            {elements.map((element) => (
              <DesignerElementWrapper key={element.id} element={element} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FormBuilderDesigner;
