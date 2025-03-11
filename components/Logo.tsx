import Link from "next/link";
import React from "react";

type LogoProps = {
  isSignIn?: boolean;
};

function Logo({ isSignIn }: LogoProps) {
  return (
    <Link
      href={isSignIn ? "/" : "/dashboard"}
      className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent hover:cursor-pointer bg-clip-text"
    >
      Formulate
    </Link>
  );
}

export default Logo;
