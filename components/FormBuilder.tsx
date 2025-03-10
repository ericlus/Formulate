"use client";

import { Form } from "@prisma/client";
import React, { useEffect } from "react";
import FormBuilderHeader from "./FormBuilderHeader";
import FormBuilderDesigner from "./FormBuilderDesigner";
import FormBuilderSidebar from "./FormBuilderSidebar";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";
import useDesigner from "./hooks/useDesigner";
import FormBuilderPublished from "./FormBuilderPublished";

type FormBuilderProps = {
  form: Form;
};

function FormBuilder({ form }: FormBuilderProps) {
  const { setElements } = useDesigner();
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  // used for mobile devices
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    const elements = JSON.parse(form.content);
    setElements(elements);
  }, [form, setElements]);

  if (form.published) {
    return <FormBuilderPublished id={form.id} shareUrl={form.shareURL} />;
  }

  return (
    <main className="flex flex-col w-full">
      <FormBuilderHeader
        formId={form.id}
        formName={form.name}
        isPublished={form.published}
      />
      <div className="flex flex-grow gap-2 bg-[length:50px_50px] bg-repeat bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
        <div className="container flex justify-center py-4 gap-4 relative">
          <DndContext sensors={sensors}>
            <FormBuilderDesigner />
            <FormBuilderSidebar />
            <DragOverlayWrapper />
          </DndContext>
        </div>
      </div>
    </main>
  );
}

export default FormBuilder;
