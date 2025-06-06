import { GetFormWithSubmissions } from "@/actions/form";
import React from "react";
import { FormElementInstance } from "./FormElements";
import FormSubmissionsCard from "./FormSubmissionsCard";
import FormSubmissionsPagination from "./FormSubmissionsPagination";

const PAGE_SIZE = 9;

type FormSubmissionsCardsProps = {
  id: number;
  page?: string;
};

async function FormSubmissionsCards({ id, page }: FormSubmissionsCardsProps) {
  const pageNumber = page ? Number(page) : 1;
  const { form, totalSubmissions } = await GetFormWithSubmissions(
    id,
    pageNumber,
    PAGE_SIZE
  );

  if (!form) {
    throw new Error("Form not found");
  }

  const formElements = JSON.parse(form.content) as FormElementInstance[];
  const submissions = form.FormSubmissions;

  const acceptedTypes = new Set([
    "TextField",
    "NumberField",
    "TextareaField",
    "DateField",
    "SelectField",
    "CheckboxField",
  ]);

  const cardSections = formElements
    .filter((element) => acceptedTypes.has(element.type))
    .map(({ id, type, extraAttributes }) => ({
      id,
      label: extraAttributes?.label,
      required: extraAttributes?.required,
      type,
    }));

  return (
    <div className="container flex flex-col gap-4 py-10">
      <h1 className="text-2xl font-bold">Submissions</h1>
      <div className="grid gap-3 lg:gap-4 grid-cols-1 lg:grid-cols-3">
        {submissions.length === 0 && <div>There are no submissions.</div>}
        {submissions.map((submission) => (
          <FormSubmissionsCard
            key={submission.id}
            cardSections={cardSections}
            submission={submission}
          />
        ))}
      </div>
      <FormSubmissionsPagination
        page={pageNumber}
        totalSubmissions={totalSubmissions}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
}

export default FormSubmissionsCards;
