"use client";

import Image from "next/image";
import React, { useRef } from "react";
import ProductScreenshot from "@/public/images/product-screenshot.png";
import { motion, useScroll, useTransform } from "motion/react";

function ProductShowcase() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]); // Key fix here

  return (
    <div className="bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24 w-full">
      <div className="px-4 sm:px-6">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Drag. Drop. Done. Effortless form creation in minutes with a
            user-friendly view.
          </p>
        </div>
        <motion.div
          className="overflow-hidden mt-14 mx-auto max-w-screen-xl w-full"
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
            width,
          }}
        >
          <Image
            ref={imageRef}
            className="w-full object-contain"
            src={ProductScreenshot}
            alt="The product screenshot"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ProductShowcase;
