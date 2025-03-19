"use client";

import React, { useState, useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { IoSettingsSharp } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DeleteForm } from "@/actions/form";
import { toast } from "@/hooks/use-toast";
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from "next/navigation";

type SettingsButtonProps = {
  id: number;
};

function SettingsButton({ id }: SettingsButtonProps) {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, startTransition] = useTransition();

  const handleDeleteForm = async () => {
    try {
      await DeleteForm(id);
      setIsDialogOpen(false);
      toast({
        title: "Success",
        description: "Form deleted successfully",
      });
      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to delete form: ${error}`,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <IoSettingsSharp />
            Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="font-bold text-destructive justify-center"
              onClick={() => setIsDialogOpen(true)}
            >
              Delete Form
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this form? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={loading}
              onClick={() => startTransition(handleDeleteForm)}
            >
              Delete {loading && <ImSpinner2 className="animate-spin" />}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SettingsButton;
