import { Form } from "@prisma/client";
import React from "react";
import FormBuilderHeader from "./FormBuilderHeader";

type FormBuilderProps = {
  form: Form;
};

function FormBuilder({ form }: FormBuilderProps) {
  return (
    <main className="flex flex-col w-full">
      <FormBuilderHeader formName={form.name} isPublished={form.published} />
    </main>
  );
}

export default FormBuilder;
