import React from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { FaShareSquare } from "react-icons/fa";
import CopyLinkInput from "./CopyLinkInput";

function ShareLinkPopover({ shareUrl }: { shareUrl: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <FaShareSquare />
          Share Link
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-4 min-w-[300px]">
        <h2 className="text-muted-foreground">
          Anyone with this link can view and submit the form
        </h2>
        <CopyLinkInput shareUrl={shareUrl} className="w-full" />
      </PopoverContent>
    </Popover>
  );
}

export default ShareLinkPopover;
