"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import useFormShareUrl from "./hooks/useFormShareUrl";

type CopyLinkInputProps = {
  shareUrl: string;
  className?: string;
};

function CopyLinkInput({ shareUrl, className }: CopyLinkInputProps) {
  const formShareUrl = useFormShareUrl(shareUrl);

  return (
    <div className={cn("flex gap-2", className)}>
      <Input className="w-full" value={formShareUrl} readOnly />
      <Button
        onClick={() => {
          navigator.clipboard.writeText(formShareUrl);
          toast({
            title: "Copied!",
            description: "Link copied to clipboard",
          });
        }}
      >
        Copy link
      </Button>
    </div>
  );
}

export default CopyLinkInput;
