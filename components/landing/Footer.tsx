import React from "react";
import { Separator } from "../ui/separator";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

function Footer() {
  return (
    <div className="bg-black px-4 sm:px-6 py-[72px] sm:py-24 w-full">
      <div className="max-w-5xl mx-auto">
        <Separator />
        <div className="sm:flex sm:flex-row-reverse sm:justify-between sm:mt-12">
          <div className="flex justify-center gap-4 my-8 sm:my-0">
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://www.linkedin.com/in/ericwluu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin Link"
              >
                <FaLinkedin className="!h-8 !w-8" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://github.com/ericlus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Link"
              >
                <FaGithub className="!h-8 !w-8" />
              </a>
            </Button>
          </div>
          <p className="text-white/70 text-center sm:text-left">
            Copyright @2025 Eric Luu <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
