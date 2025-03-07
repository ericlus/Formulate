import { GetFormWithSubmissions } from "@/actions/form";
import React from "react";
import { ElementsType, FormElementInstance } from "./FormElements";
import FormSubmissionsCard from "./FormSubmissionsCard";

type FormSubmissionsCardsProps = {
  id: number;
};

type CardSections = {
  id: string;
  label: string;
  required: boolean;
  type: ElementsType;
};

async function FormSubmissionsCards({ id }: FormSubmissionsCardsProps) {
  const form = await GetFormWithSubmissions(id);

  if (!form) {
    throw new Error("Form not found");
  }

  const formElements = JSON.parse(form.content) as FormElementInstance[];
  const cardSections: CardSections[] = [];
  const submissions = form.FormSubmissions;

  formElements.forEach((element) => {
    switch (element.type) {
      case "TextField":
        cardSections.push({
          id: element.id,
          label: element.extraAttributes?.label,
          required: element.extraAttributes?.required,
          type: element.type,
        });
        break;
      default:
        break;
    }
  });

  return (
    <div className="container flex flex-col gap-4 py-10">
      <h1 className="text-2xl font-bold">Submissions</h1>
      <div className="grid gap-3 lg:gap-4 grid-cols-1 lg:grid-cols-3">
        {submissions.map((submission) => (
          <FormSubmissionsCard
            key={submission.id}
            cardSections={cardSections}
            submission={submission}
          />
        ))}
      </div>
    </div>
  );
}

export default FormSubmissionsCards;
