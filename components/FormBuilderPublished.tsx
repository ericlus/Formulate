import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Confetti from "react-confetti";

type FormBuilderPublishedProps = {
  id: number;
  shareUrl: string;
};

function FormBuilderPublished({ id, shareUrl }: FormBuilderPublishedProps) {
  const formShareUrl = `${window.location.origin}/submit/${shareUrl}`;

  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
      />
      <div className="flex flex-col flex-grow items-center justify-center w-full gap-8">
        <h1 className="text-4xl font-bold text-primary">
          🎉 Form Published 🎉
        </h1>
        <h2 className="text-xl text-muted-foreground">
          Anyone with this link can view and submit the form
        </h2>
        <div className="flex gap-2 min-w-[446px]">
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
        <div className="flex justify-between min-w-[446px]">
          <Button variant="link" className="p-0" asChild>
            <Link href="/" className="gap-2">
              <BsArrowLeft />
              Return to home
            </Link>
          </Button>
          <Button variant="link" className="p-0" asChild>
            <Link href={`/forms/${id}`} className="gap-2">
              Form details
              <BsArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default FormBuilderPublished;
