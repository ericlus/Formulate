import Image from "next/image";
import React from "react";
import ProductScreenshot from "@/public/images/product-screenshot.png";

function ProductShowcase() {
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
        <Image
          className="mt-14 mx-auto max-w-screen-xl w-full"
          src={ProductScreenshot}
          alt="The product screenshot"
        />
      </div>
    </div>
  );
}

export default ProductShowcase;
