import { GetFormStats } from "@/actions/form";
import StatsCards from "@/components/StatsCards";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-8">
      <Suspense fallback={<StatsCards loading={true} />}>
        <StatsCardWrapper />
      </Suspense>
    </div>
  );
}

async function StatsCardWrapper() {
  const formStats = await GetFormStats();
  return <StatsCards formStats={formStats} loading={false} />;
}
