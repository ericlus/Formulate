"use client";

import React from "react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <div className="bg-black w-full">
      <div className="flex h-fit mx-auto justify-between items-center p-4 sm:p-6 max-w-screen-xl">
        <Logo isLoggedOut className="text-2xl sm:text-3xl" />
        <nav className="items-center flex">
          <Button
            variant="outline"
            className="py-0 px-3 text-xs sm:py-2 sm:px-4 sm:text-sm"
            asChild
          >
            <Link
              href={isSignedIn ? "/dashboard" : "/sign-up"}
              className="gap-2"
            >
              {isSignedIn ? "Go to Dashboard" : "Start building"}
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
