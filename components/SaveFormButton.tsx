import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { IoIosSave } from "react-icons/io";
import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "@/hooks/use-toast";
import { ImSpinner2 } from "react-icons/im";

function SaveFormButton({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({
        title: "Success",
        description: "Your form has been saved",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <IoIosSave className="!h-5 !w-5" />
      Save
      {loading && <ImSpinner2 className="animate-spin" />}
    </Button>
  );
}

export default SaveFormButton;
