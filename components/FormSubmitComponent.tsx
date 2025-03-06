"use client";

import React, { useCallback, useRef, useState, useTransition } from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import { SubmitForm } from "@/actions/form";
import { ImSpinner2 } from "react-icons/im";

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
  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

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

  const submitForm = async () => {
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
    try {
      const jsonContent = JSON.stringify(formValues.current);
      await SubmitForm(formUrl, jsonContent);
      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-grow justify-center items-center">
        <div className="max-w-[620px] flex flex-col gap-4 bg-background border rounded p-8 shadow-md">
          <h1 className="text-2xl font-bold">Form submitted</h1>
          <p className="text-muted-foreground">
            Thank you for submitting the form, you can close this page now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-grow py-8 justify-center">
      <div className="max-w-[920px] flex flex-col gap-8 bg-background border h-full w-full rounded p-8 overflow-y-auto shadow-md">
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
          <Button
            className="mt-8 w-1/5"
            onClick={() => {
              startTransition(submitForm);
            }}
            disabled={pending}
          >
            Submit
            {pending && <ImSpinner2 className="animate-spin" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FormSubmitComponent;
