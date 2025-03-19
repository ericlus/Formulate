import React from "react";
import ShareLinkPopover from "./ShareLinkPopover";
import VisitLinkButton from "./VisitLinkButton";
import SettingsButton from "./SettingsButton";

type FormSubmissionsProps = {
  id: number;
  formName: string;
  shareUrl: string;
};

function FormSubmissionsHeader({
  id,
  formName,
  shareUrl,
}: FormSubmissionsProps) {
  return (
    <nav className="relative flex justify-end p-8 gap-3 items-center">
      <h2 className="absolute truncate font-bold text-3xl left-1/2 transform -translate-x-1/2">
        {formName}
      </h2>
      <div className="flex items-center gap-2">
        <SettingsButton id={id} />
        <ShareLinkPopover shareUrl={shareUrl} />
        <VisitLinkButton shareUrl={shareUrl} />
      </div>
    </nav>
  );
}

export default FormSubmissionsHeader;
