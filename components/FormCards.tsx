import { GetForms } from "@/actions/form";
import React from "react";
import FormCard from "./FormCard";

type FormCards = {
  forms: Awaited<ReturnType<typeof GetForms>>;
};

function FormCards({ forms }: FormCards) {
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

export default FormCards;
