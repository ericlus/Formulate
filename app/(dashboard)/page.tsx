import { GetForms, GetFormStats } from "@/actions/form";
import CreateFormButton from "@/components/CreateFormButton";
import FormCards from "@/components/FormCards";
import StatsCards from "@/components/StatsCards";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-8">
      <Suspense fallback={<StatsCards loading={true} />}>
        <StatsCardWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <CreateFormButton />
        <Suspense
          fallback={Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-[190px] w-full" />
          ))}
        >
          <FormCardsWrapper />
        </Suspense>
      </div>
    </div>
  );
}

async function StatsCardWrapper() {
  const formStats = await GetFormStats();
  return <StatsCards formStats={formStats} loading={false} />;
}

async function FormCardsWrapper() {
  const forms = await GetForms();
  return <FormCards forms={forms} />;
}
