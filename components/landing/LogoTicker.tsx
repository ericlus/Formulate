"use client";

import React from "react";
import nextLogo from "@/public/images/next.png";
import postgresLogo from "@/public/images/postgres.png";
import prismaLogo from "@/public/images/prisma.png";
import reactLogo from "@/public/images/react.png";
import tailwindLogo from "@/public/images/tailwind.png";
import vercelLogo from "@/public/images/vercel.png";
import Image from "next/image";
import { motion } from "motion/react";

const images = [
  { src: nextLogo, alt: "Next Logo" },
  { src: postgresLogo, alt: "Postgres Logo" },
  { src: prismaLogo, alt: "Prisma Logo" },
  { src: reactLogo, alt: "React Logo" },
  { src: tailwindLogo, alt: "Tailwind Logo" },
  { src: vercelLogo, alt: "Vercel Logo" },
];

function LogoTicker() {
  return (
    <div className="bg-black w-full py-16 sm:py-[72px] lg:py-24 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-xl text-center text-white/70">
            Powered using state of the art technologies
          </h2>
        </div>
        <div className="flex overflow-hidden mt-9 sm:mt-11 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none justify-center pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-7 sm:h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-7 sm:h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
