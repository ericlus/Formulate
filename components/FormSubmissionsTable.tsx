import { Form } from "@prisma/client";
import React from "react";

type FormSubmissionsTableProps = {
  form: Form;
};

async function FormSubmissionsTable({ form }: FormSubmissionsTableProps) {
  return (
    <div className="container pt-10">
      <h1 className="text-2xl font-bold">Submissions</h1>
    </div>
  );
}

export default FormSubmissionsTable;
