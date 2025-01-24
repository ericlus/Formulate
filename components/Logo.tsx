import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent hover:cursor-pointer bg-clip-text"
    >
      Form Builder
    </Link>
  );
}

export default Logo;
