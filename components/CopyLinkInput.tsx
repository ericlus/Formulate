"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type CopyLinkInputProps = {
  shareUrl: string;
  className?: string;
};

function CopyLinkInput({ shareUrl, className }: CopyLinkInputProps) {
  const [formShareUrl, setFormShareUrl] = useState("");

  useEffect(() => {
    setFormShareUrl(`${window.location.origin}/submit/${shareUrl}`);
  }, [shareUrl]);

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
