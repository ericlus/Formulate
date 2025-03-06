"use client";

import React, { useCallback, useRef, useState } from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

type FormSubmitComponentProps = {
  formContent: FormElementInstance[];
  formUrl: string;
};

function FormSubmitComponent({
  formContent,
  formUrl,
}: FormSubmitComponentProps) {
  const formValues = useRef<{ [key: string]: string }>({});
  const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({});

  const submitInputValue = (key: string, value: string) => {
    formValues.current[key] = value;
  };

  const validateForm = useCallback(() => {
    const newFormErrors: { [key: string]: boolean } = {};
    for (const field of formContent) {
      const currentValue = formValues.current[field.id] || "";
      const valid = FormElements[field.type].validate(field, currentValue);
      if (!valid) {
        newFormErrors[field.id] = true;
      }
    }

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return false;
    }

    return true;
  }, [formContent]);

  const submitForm = () => {
    setFormErrors({});
    const validForm = validateForm();
    if (!validForm) {
      toast({
        title: "Error",
        description: "Please fill in required fields",
        variant: "destructive",
      });
      return;
    }
  };

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
              isInvalid={formErrors[element.id]}
              defaultValue={formValues.current[element.id]}
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
