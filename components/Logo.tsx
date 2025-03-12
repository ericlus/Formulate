import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type LogoProps = {
  isLoggedOut?: boolean;
  className?: string;
};

function Logo({ isLoggedOut, className }: LogoProps) {
  return (
    <Link
      href={isLoggedOut ? "/" : "/dashboard"}
      className={cn(
        "font-bold text-3xl bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent hover:cursor-pointer bg-clip-text",
        className
      )}
    >
      Formulate
    </Link>
  );
}

export default Logo;
