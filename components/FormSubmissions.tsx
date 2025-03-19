import React from "react";
import FormSubmissionsHeader from "./FormSubmissionsHeader";
import { Form } from "@prisma/client";
import StatsCards from "./StatsCards";
import { calcFormStats } from "@/lib/calcFormStats";
import FormSubmissionsCards from "./FormSubmissionsCards";

type FormSubmissionsProps = {
  form: Form;
  page?: string;
};

function FormSubmissions({ form, page }: FormSubmissionsProps) {
  const { id, visits, submissions, name, shareURL } = form;
  const formStats = calcFormStats(visits, submissions);
  return (
    <main className="flex flex-col w-full gap-4">
      <FormSubmissionsHeader id={id} formName={name} shareUrl={shareURL} />
      <div className="container">
        <StatsCards formStats={formStats} />
      </div>
      <FormSubmissionsCards id={id} page={page} />
    </main>
  );
}

export default FormSubmissions;
