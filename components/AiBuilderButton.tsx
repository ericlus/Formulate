"use client";

import React, { useState, useTransition } from "react";
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
import { toast } from "@/hooks/use-toast";
import { ImSpinner2 } from "react-icons/im";
import { aiChatSession } from "@/actions/gemini";
import useDesigner from "./hooks/useDesigner";

function AiBuilderButton() {
  const [prompt, setPrompt] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, startTransition] = useTransition();
  const { elements, setElements } = useDesigner();

  const handleAiPrompt = async () => {
    try {
      const response = await aiChatSession(
        prompt.trim(),
        elements.length > 0 ? JSON.stringify(elements) : undefined
      );
      setElements(response);
    } catch (error) {
      toast({
        title: "Error",
        description: `Something went wrong, please try again later: ${error}`,
        variant: "destructive",
      });
    } finally {
      setPrompt("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            placeholder="Ask anything"
            value={prompt}
            rows={5}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button
            disabled={prompt.trim().length === 0}
            onClick={() => startTransition(handleAiPrompt)}
          >
            Start building {loading && <ImSpinner2 className="animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AiBuilderButton;
