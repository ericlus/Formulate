import { GetFormById } from "@/actions/form";
import FormSubmissions from "@/components/FormSubmissions";
import React from "react";

type FormPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function FormPage({ params }: FormPageProps) {
  const { id } = await params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("Form not found");
  }
  return <FormSubmissions form={form} />;
}

export default FormPage;
