import React, { Suspense } from "react";
import FormSubmissionsHeader from "./FormSubmissionsHeader";
import { Form } from "@prisma/client";
import StatsCards from "./StatsCards";
import { calcFormStats } from "@/lib/calcFormStats";

type FormSubmissionsProps = {
  form: Form;
};

function FormSubmissions({ form }: FormSubmissionsProps) {
  const { visits, submissions } = form;
  const formStats = calcFormStats(visits, submissions);
  return (
    <main className="flex flex-col w-full gap-4">
      <FormSubmissionsHeader formName={form.name} shareUrl={form.shareURL} />
      <div className="container">
        <StatsCards formStats={formStats} />
      </div>
    </main>
  );
}

export default FormSubmissions;
