import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Confetti from "react-confetti";
import CopyLinkInput from "./CopyLinkInput";

type FormBuilderPublishedProps = {
  id: number;
  shareUrl: string;
};

function FormBuilderPublished({ id, shareUrl }: FormBuilderPublishedProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
      />
      <div className="flex flex-col flex-grow items-center justify-center w-full gap-8">
        <h1 className="text-4xl font-bold text-primary">
          🎉 Form Published 🎉
        </h1>
        <h2 className="text-xl text-muted-foreground">
          Anyone with this link can view and submit the form
        </h2>
        <CopyLinkInput shareUrl={shareUrl} className="min-w-[446px]" />
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
