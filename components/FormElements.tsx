import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType = "TextField";

export type SubmitInputFunction = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;
  designerButtonElement: {
    icon: React.ElementType;
    label: string;
  };
  construct: (id: string) => FormElementInstance;
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formComponent: React.FC<{
    elementInstance: FormElementInstance;
    submitInputValue?: SubmitInputFunction;
  }>;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

export type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
