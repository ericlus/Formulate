"use client";

import { cn } from "@/lib/utils";
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { ElementsType, FormElements } from "./FormElements";
import { idGenerator } from "@/lib/idGenerator";
import useDesigner from "./hooks/useDesigner";
import DesignerElementWrapper from "./DesignerElementWrapper";
import AiBuilderButton from "./AiBuilderButton";

function FormBuilderDesigner() {
  const {
    elements,
    addElement,
    removeElement,
    selectedElement,
    setSelectedElement,
  } = useDesigner();
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
      const isOverDesignerDropArea = over.data?.current?.isDesignerDropArea;

      // Dropping a sidebar button element over the designer drop area
      if (isDesignerButtonElement && isOverDesignerDropArea) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );
        addElement(elements.length, newElement);
        return;
      }

      const isOverTopHalfDesignerElement =
        over.data?.current?.isTopHalfDesignerElement;
      const isOverBottomHalfDesignerElement =
        over.data?.current?.isBottomHalfDesignerElement;

      // Dropping a sidebar button element over a designer element
      if (
        isDesignerButtonElement &&
        (isOverTopHalfDesignerElement || isOverBottomHalfDesignerElement)
      ) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );
        const overElementId = over.data?.current?.elementId;
        const overElementIndex = elements.findIndex(
          (el) => el.id === overElementId
        );
        let indexForNewElement = overElementIndex;
        if (isOverBottomHalfDesignerElement) {
          indexForNewElement = overElementIndex + 1;
        }
        addElement(indexForNewElement, newElement);
        return;
      }

      const isDesignerElement = active.data?.current?.isDesignerElement;

      // Moving a designer element over a designer element
      if (
        isDesignerElement &&
        (isOverTopHalfDesignerElement || isOverBottomHalfDesignerElement)
      ) {
        const overElementId = over.data?.current?.elementId;
        const activeElementId = active.data?.current?.elementId;
        const overElementIndex = elements.findIndex(
          (el) => el.id === overElementId
        );
        const activeElementIndex = elements.findIndex(
          (el) => el.id === activeElementId
        );
        const activeElement = { ...elements[activeElementIndex] };
        removeElement(activeElementId);

        let indexForNewElement = overElementIndex;
        if (isOverBottomHalfDesignerElement && activeElementIndex !== 0) {
          indexForNewElement = overElementIndex + 1;
        }
        // Handle edge case for moving the first element
        if (isOverTopHalfDesignerElement && activeElementIndex === 0) {
          indexForNewElement = overElementIndex - 1;
        }
        addElement(indexForNewElement, activeElement);
        return;
      }
    },
  });

  return (
    <div
      ref={droppable.setNodeRef}
      className={cn(
        "w-full max-w-[920px] bg-background h-full rounded-xl flex flex-col overflow-y-auto relative p-4 gap-2",
        droppable.isOver && "ring-2 ring-primary/20"
      )}
      onClick={() => {
        if (selectedElement) {
          setSelectedElement(null);
        }
      }}
    >
      {droppable.isOver && elements.length === 0 && (
        <div className="w-full h-28 bg-primary/20 rounded-xl"></div>
      )}
      {!droppable.isOver && elements.length === 0 && (
        <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-3xl text-center text-muted-foreground font-bold">
            Drop here or try
          </p>
          <AiBuilderButton />
        </div>
      )}
      {elements.length > 0 && (
        <>
          {elements.map((element) => (
            <DesignerElementWrapper key={element.id} element={element} />
          ))}
        </>
      )}
    </div>
  );
}

export default FormBuilderDesigner;
