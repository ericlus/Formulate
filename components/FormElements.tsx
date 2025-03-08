import { ParagraphFieldFormElement } from "./fields/ParagraphField";
import { SeparatorFieldFormElement } from "./fields/SeparatorField";
import { SpacerFieldFormElement } from "./fields/SpacerField";
import { SubtitleFieldFormElement } from "./fields/SubtitleField";
import { TextFieldFormElement } from "./fields/TextField";
import { TitleFieldFormElement } from "./fields/TitleField";

export type ElementsType =
  | "TextField"
  | "TitleField"
  | "SubtitleField"
  | "ParagraphField"
  | "SeparatorField"
  | "SpacerField";

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
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  validate: (formElement: FormElementInstance, currentValue: string) => boolean;
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
  TitleField: TitleFieldFormElement,
  SubtitleField: SubtitleFieldFormElement,
  ParagraphField: ParagraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
};
