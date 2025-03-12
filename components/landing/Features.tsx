import React from "react";
import { TiDocumentText } from "react-icons/ti";
import { RiUserSharedLine } from "react-icons/ri";
import { CgInsights } from "react-icons/cg";

const features = [
  {
    title: "Effortless Form Building",
    description:
      "Drag, drop, and design custom forms for job applications, surveys, and more — no coding needed.",
    icon: <TiDocumentText className="h-8 w-8" />,
  },
  {
    title: "Instant Sharing",
    description:
      "Publish your forms with a unique URL, making it easy to share with your audience.",
    icon: <RiUserSharedLine className="h-8 w-8" />,
  },
  {
    title: "Smarter Insights",
    description:
      "Track visits, submissions, and bounce rates to improve engagement and performance.",
    icon: <CgInsights className="h-8 w-8" />,
  },
];

function Features() {
  return (
    <div className="px-4 sm:px-6 py-[72px] sm:py-24 bg-black w-full">
      <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
        All-in-One Form Solution
      </h2>
      <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">
          From seamless form creation to instant sharing and performance
          tracking, Formulate gives you everything you need to build, share, and
          optimize forms effortlessly.
        </p>
      </div>
      <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
        {features.map(({ title, description, icon }) => (
          <div
            key={title}
            className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 sm:max-w-80"
          >
            <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
              {icon}
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
