import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  designerButtonElement: {
    icon: MdTextFields,
    label: "TextField",
  },
};
