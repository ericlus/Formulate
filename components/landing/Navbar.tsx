"use client";

import React from "react";
import Logo from "../Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { useAuth, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  const handleClick = async () => {
    if (isSignedIn) {
      await signOut();
      router.push("/");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="flex h-fit w-full justify-between items-center">
      <Logo isLoggedOut className="text-2xl sm:text-3xl" />
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
        <RxHamburgerMenu className="!h-5 !w-5" />
      </div>
      <nav className="gap-6 items-center hidden sm:flex">
        <button
          onClick={handleClick}
          className="text-white text-opacity-60 hover:text-opacity-100 transition"
        >
          {isSignedIn ? "Sign out" : "Sign in"}
        </button>
        <Button asChild>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="gap-2">
            {isSignedIn ? "Go to Dashboard" : "Start building"}
          </Link>
        </Button>
      </nav>
    </div>
  );
}

export default Navbar;
