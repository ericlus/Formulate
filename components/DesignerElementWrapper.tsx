"use client";

import React, { useState } from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { Button } from "./ui/button";
import { BiSolidTrash } from "react-icons/bi";
import useDesigner from "./hooks/useDesigner";
import { cn } from "@/lib/utils";

type DesignerElementWrapperProps = {
  element: FormElementInstance;
};

function DesignerElementWrapper({ element }: DesignerElementWrapperProps) {
  const { removeElement } = useDesigner();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const DesignerElement = FormElements[element.type].designerComponent;
  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className={"flex flex-col rounded-md bg-accent/40 p-4 relative border"}
    >
      <div className={"absolute h-1/2 w-full top-0 left-0 rounded-t-md"} />
      <div className="absolute h-1/2 w-full bottom-0 left-0 rounded-b-md" />
      <div className={cn("pointer-events-none", isMouseOver && "opacity-30")}>
        <DesignerElement elementInstance={element} />
      </div>
      {isMouseOver && (
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
              onClick={() => removeElement(element.id)}
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
