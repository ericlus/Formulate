import React from "react";
import SidebarButtonElement from "./SidebarButtonElement";
import { FormElements } from "./FormElements";

function FormBuilderSidebar() {
  return (
    <div className="w-full max-w-[400px] p-4">
      <div className="bg-background h-full rounded-xl p-4">
        Elements
        <SidebarButtonElement formElement={FormElements.TextField} />
      </div>
    </div>
  );
}

export default FormBuilderSidebar;
