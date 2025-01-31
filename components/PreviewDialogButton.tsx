import React from "react";
import { Button } from "./ui/button";
import { MdPreview } from "react-icons/md";

function PreviewDialogButton() {
  return (
    <Button variant="outline">
      <MdPreview className="!h-5 !w-5" />
      Preview
    </Button>
  );
}

export default PreviewDialogButton;
