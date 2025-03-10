import React from "react";
import useDesigner from "./hooks/useDesigner";
import FormBuilderSidebarElements from "./FormBuilderSidebarElements";
import FormBuilderSidebarProperties from "./FormBuilderSidebarProperties";

function FormBuilderSidebar() {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-full max-w-[400px] bg-background max-h-fit rounded-xl p-4 sticky top-2">
      {!selectedElement ? (
        <FormBuilderSidebarElements />
      ) : (
        <FormBuilderSidebarProperties />
      )}
    </aside>
  );
}

export default FormBuilderSidebar;
