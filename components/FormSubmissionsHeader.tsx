import React from "react";
import { Button } from "./ui/button";
import ShareLinkPopover from "./ShareLinkPopover";

type FormSubmissionsProps = {
  formName: string;
  shareUrl: string;
};

function FormSubmissionsHeader({ formName, shareUrl }: FormSubmissionsProps) {
  return (
    <nav className="relative flex justify-end border-b-2 p-4 gap-3 items-center">
      <h2 className="absolute truncate font-bold text-2xl left-1/2 transform -translate-x-1/2">
        {formName}
      </h2>
      <div className="flex items-center gap-2">
        <ShareLinkPopover shareUrl={shareUrl} />
        <Button className="min-w-32">Visit</Button>
      </div>
    </nav>
  );
}

export default FormSubmissionsHeader;
