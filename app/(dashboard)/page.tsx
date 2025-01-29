import { GetForms, GetFormStats } from "@/actions/form";
import CreateFormButton from "@/components/CreateFormButton";
import FormCards from "@/components/FormCards";
import StatsCards from "@/components/StatsCards";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-grow">
      <div className="container pt-8">
        <Suspense fallback={<StatsCards loading={true} />}>
          <StatsCardWrapper />
        </Suspense>
        <h2 className="text-4xl font-bold mt-12">Your Forms</h2>
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
    </main>
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
