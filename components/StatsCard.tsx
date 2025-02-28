import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type StatsCardProps = {
  title: string;
  helperText: string;
  className?: string;
  value?: string;
  loading?: boolean;
};

function StatsCard({
  title,
  helperText,
  className,
  value,
  loading,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex pb-2">
        <CardTitle className="text-sm text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
