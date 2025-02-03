import React from "react";
import { FormElementInstance, FormElements } from "./FormElements";

type DesignerElementWrapperProps = {
  element: FormElementInstance;
};

function DesignerElementWrapper({ element }: DesignerElementWrapperProps) {
  const DesignerElement = FormElements[element.type].designerComponent;
  return <DesignerElement />;
}

export default DesignerElementWrapper;
