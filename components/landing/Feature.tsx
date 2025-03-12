"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

type FeatureProps = {
  title: string;
  icon: React.JSX.Element;
  description: string;
};

function Feature({ title, icon, description }: FeatureProps) {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) {
        return;
      }
      const borderRect = borderRef.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 sm:max-w-80 relative">
      <motion.div
        ref={borderRef}
        className="absolute -inset-[1px] border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        {icon}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
}

export default Feature;
