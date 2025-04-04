import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";
import React from "react";

type BuilderPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function BuilderPage({ params }: BuilderPageProps) {
  const { id } = await params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("Form not found");
  }
  return <FormBuilder form={form} />;
}

export default BuilderPage;
