import React, { startTransition, useTransition } from "react";
import { Button } from "./ui/button";
import { MdFileUpload } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { ImSpinner2 } from "react-icons/im";
import { PublishForm } from "@/actions/form";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function PublishFormButton({ id }: { id: number }) {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const handlePublishForm = async () => {
    try {
      await PublishForm(id);
      toast({
        title: "Success",
        description: "Your form is now published",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white"
        >
          <MdFileUpload className="!h-5 !w-5" />
          Publish
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. After publishing you will not be able
            to edit this form. <br /> <br />
            <span className="font-medium">
              By publishing this form you will make it available to the public
              and you will be able to collect submissions.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(handlePublishForm);
            }}
          >
            Proceed {loading && <ImSpinner2 className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PublishFormButton;
