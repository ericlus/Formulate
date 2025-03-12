import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function CTA() {
  return (
    <div className="bg-black px-4 sm:px-6 py-[72px] sm:py-24 w-full">
      <div className="text-center">
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get Instant Access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Get started for free and start building custom forms today!
        </p>
        <div className="flex justify-center mt-10">
          <Button className="px-5 py-3 h-fit">
            <Link href="/sign-up">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
