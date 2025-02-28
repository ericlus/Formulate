"use client";

import React from "react";
import { Button } from "./ui/button";
import useFormShareUrl from "./hooks/useFormShareUrl";

function VisitLinkButton({ shareUrl }: { shareUrl: string }) {
  const formShareUrl = useFormShareUrl(shareUrl);

  return (
    <Button
      className="min-w-32"
      onClick={() => {
        window.open(formShareUrl, "_blank");
      }}
    >
      Visit
    </Button>
  );
}

export default VisitLinkButton;
