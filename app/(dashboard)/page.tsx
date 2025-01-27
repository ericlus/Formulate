import { GetFormStats } from "@/actions/form";
import CreateFormButton from "@/components/CreateFormButton";
import StatsCards from "@/components/StatsCards";
import { Separator } from "@/components/ui/separator";
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
      <CreateFormButton />
    </div>
  );
}

async function StatsCardWrapper() {
  const formStats = await GetFormStats();
  return <StatsCards formStats={formStats} loading={false} />;
}
