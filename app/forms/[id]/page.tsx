import { GetFormById } from "@/actions/form";
import FormSubmissions from "@/components/FormSubmissions";
import React from "react";

type FormPageProps = {
  params: Promise<{
    id: string;
    page?: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

async function FormPage({ params, searchParams }: FormPageProps) {
  const { id } = await params;
  const { page } = await searchParams;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("Form not found");
  }
  return <FormSubmissions form={form} page={page} />;
}

export default FormPage;
