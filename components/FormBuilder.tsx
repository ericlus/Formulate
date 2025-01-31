import { Form } from "@prisma/client";
import React from "react";
import FormBuilderHeader from "./FormBuilderHeader";
import FormBuilderDesigner from "./FormBuilderDesigner";
import FormBuilderSidebar from "./FormBuilderSidebar";

type FormBuilderProps = {
  form: Form;
};

function FormBuilder({ form }: FormBuilderProps) {
  return (
    <main className="flex flex-col w-full">
      <FormBuilderHeader formName={form.name} isPublished={form.published} />
      <div className="flex flex-grow gap-2 bg-[length:50px_50px] bg-repeat bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
        <div className="container flex justify-center">
          <FormBuilderDesigner />
          <FormBuilderSidebar />
        </div>
      </div>
    </main>
  );
}

export default FormBuilder;
