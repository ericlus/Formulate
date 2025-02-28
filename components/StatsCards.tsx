import { GetFormStats } from "@/actions/form";
import StatsCard from "@/components/StatsCard";

type StatsCardsProps = {
  formStats?: Awaited<ReturnType<typeof GetFormStats>>;
  loading?: boolean;
};

function StatsCards({ formStats, loading }: StatsCardsProps) {
  return (
    <div className="grid gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Visits"
        helperText="All time form visits"
        className="border-2"
        value={String(formStats?.visits)}
        loading={loading}
      />
      <StatsCard
        title="Total Submissions"
        helperText="All time form submissions"
        className="border-2"
        value={String(formStats?.submissions)}
        loading={loading}
      />
      <StatsCard
        title="Submission Rate"
        helperText="Visits that result in form submission"
        className="border-2"
        value={String(formStats?.submissionRate) + "%"}
        loading={loading}
      />
      <StatsCard
        title="Bounce Rate"
        helperText="Visits that leave without interactions"
        className="border-2"
        value={String(formStats?.bounceRate) + "%"}
        loading={loading}
      />
    </div>
  );
}

export default StatsCards;
