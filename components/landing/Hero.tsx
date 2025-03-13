import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#200D42_24%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip w-full h-[640px] sm:h-[800px] flex justify-center items-center">
      <div className="absolute h-[375px] w-[800px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-210px)] sm:top-[calc(100%-260px)] lg:top-[calc(100%-235px)]"></div>
      <div className="p-4 sm:p-6 relative">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-center">
          Custom Forms <br /> Made Simple
        </h1>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-5 sm:mt-10 max-w-xs sm:max-w-md">
            Design custom forms effortlessly, share instantly, and track
            performance seamlessly.
          </p>
        </div>
        <div className="flex justify-center mt-5 sm:mt-10">
          <Button className="px-5 py-3 h-fit">
            <Link href="/sign-up">Try for free </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
