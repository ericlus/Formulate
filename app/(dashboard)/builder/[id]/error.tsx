"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error;
};

function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <h2 className="text-2xl">Something went wrong!</h2>
      <Button asChild>
        <Link href="/">Go back to home</Link>
      </Button>
    </div>
  );
}

export default Error;
