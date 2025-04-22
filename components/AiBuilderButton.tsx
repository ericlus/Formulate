"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { IoSparklesSharp } from "react-icons/io5";
import { Textarea } from "./ui/textarea";

function AiBuilderButton() {
  const [prompt, setPrompt] = useState("");

  const handleStartBuilding = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IoSparklesSharp className="!h-5 !w-5" />
          AI Builder
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Build with AI</DialogTitle>
          <DialogDescription>
            Describe what you want to build or what changes you want to make.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Textarea
            value={prompt}
            rows={5}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleStartBuilding}>Start building</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AiBuilderButton;
