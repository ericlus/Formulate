import React from "react";
import FormSubmissionsHeader from "./FormSubmissionsHeader";
import { Form } from "@prisma/client";
import StatsCards from "./StatsCards";
import { calcFormStats } from "@/lib/calcFormStats";
import FormSubmissionsTable from "./FormSubmissionsTable";

type FormSubmissionsProps = {
  form: Form;
};

function FormSubmissions({ form }: FormSubmissionsProps) {
  const { visits, submissions, name, shareURL } = form;
  const formStats = calcFormStats(visits, submissions);
  return (
    <main className="flex flex-col w-full gap-4">
      <FormSubmissionsHeader formName={name} shareUrl={shareURL} />
      <div className="container">
        <StatsCards formStats={formStats} />
      </div>
      <FormSubmissionsTable form={form} />
    </main>
  );
}

export default FormSubmissions;
