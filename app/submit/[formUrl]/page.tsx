import { GetFormContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/components/FormElements";
import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";

type SubmitPageProps = {
  params: Promise<{
    formUrl: string;
  }>;
};

async function SubmitPage({ params }: SubmitPageProps) {
  const { formUrl } = await params;
  const form = await GetFormContentByUrl(formUrl);
  if (!form) {
    throw new Error("Form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmitComponent formContent={formContent} formUrl={formUrl} />;
}

export default SubmitPage;
