import React from "react";
import FormSubmissionsHeader from "./FormSubmissionsHeader";
import { Form } from "@prisma/client";

type FormSubmissionsProps = {
  form: Form;
};

function FormSubmissions({ form }: FormSubmissionsProps) {
  return (
    <main className="flex flex-col w-full">
      <FormSubmissionsHeader formName={form.name} shareUrl={form.shareURL} />
    </main>
  );
}

export default FormSubmissions;
