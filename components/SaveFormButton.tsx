import React from "react";
import { Button } from "./ui/button";
import { IoIosSave } from "react-icons/io";

function SaveFormButton() {
  return (
    <Button variant="outline">
      <IoIosSave className="!h-5 !w-5" />
      Save
    </Button>
  );
}

export default SaveFormButton;
