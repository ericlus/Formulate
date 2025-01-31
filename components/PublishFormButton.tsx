import React from "react";
import { Button } from "./ui/button";
import { MdFileUpload } from "react-icons/md";

function PublishFormButton() {
  return (
    <Button
      variant="outline"
      className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white"
    >
      <MdFileUpload className="!h-5 !w-5" />
      Publish
    </Button>
  );
}

export default PublishFormButton;
