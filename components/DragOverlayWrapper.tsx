"use client";

import { DragOverlay, useDndMonitor, Active } from "@dnd-kit/core";
import { useState } from "react";
import { SidebarButtonElementDragOverlay } from "./SidebarButtonElement";
import { ElementsType, FormElements } from "./FormElements";
import useDesigner from "./hooks/useDesigner";

function DragOverlayWrapper() {
  const { elements } = useDesigner();
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) {
    return null;
  }

  let node = <div>No drag overlay</div>;
  const isSidebarButtonElement =
    draggedItem.data?.current?.isDesignerButtonElement;
  const isDesignerElement = draggedItem.data?.current?.isDesignerElement;

  if (isSidebarButtonElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <SidebarButtonElementDragOverlay formElement={FormElements[type]} />;
  }

  if (isDesignerElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) {
      node = <div>Element not found</div>;
    } else {
      const DesignerElement = FormElements[element.type].designerComponent;
      node = (
        <div className="rounded-md bg-accent/40 p-4 border">
          <DesignerElement elementInstance={element} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
