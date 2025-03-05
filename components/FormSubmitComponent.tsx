"use client";

import React, { useRef } from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { Button } from "./ui/button";

type FormSubmitComponentProps = {
  formContent: FormElementInstance[];
  formUrl: string;
};

function FormSubmitComponent({
  formContent,
  formUrl,
}: FormSubmitComponentProps) {
  const formValues = useRef<{ [key: string]: string }>({});

  const submitInputValue = (key: string, value: string) => {
    formValues.current[key] = value;
  };

  const submitForm = () => {};

  return (
    <div className="flex flex-grow py-8 justify-center">
      <div className="max-w-[920px] flex flex-col gap-8 flex-grow bg-background border h-full w-full rounded p-8 overflow-y-auto shadow-md">
        {formContent.map((element) => {
          const FormElement = FormElements[element.type].formComponent;
          return (
            <FormElement
              key={element.id}
              elementInstance={element}
              submitInputValue={submitInputValue}
            />
          );
        })}
        <div className="flex justify-center">
          <Button className="mt-8 w-1/5" onClick={submitForm}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FormSubmitComponent;
