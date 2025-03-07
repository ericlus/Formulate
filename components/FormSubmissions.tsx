import React from "react";
import FormSubmissionsHeader from "./FormSubmissionsHeader";
import { Form } from "@prisma/client";
import StatsCards from "./StatsCards";
import { calcFormStats } from "@/lib/calcFormStats";
import FormSubmissionsCards from "./FormSubmissionsCards";

type FormSubmissionsProps = {
  form: Form;
};

function FormSubmissions({ form }: FormSubmissionsProps) {
  const { id, visits, submissions, name, shareURL } = form;
  const formStats = calcFormStats(visits, submissions);
  return (
    <main className="flex flex-col w-full gap-4">
      <FormSubmissionsHeader formName={name} shareUrl={shareURL} />
      <div className="container">
        <StatsCards formStats={formStats} />
      </div>
      <FormSubmissionsCards id={id} />
    </main>
  );
}

export default FormSubmissions;
