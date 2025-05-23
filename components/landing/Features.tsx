import React from "react";
import { TiDocumentText } from "react-icons/ti";
import { RiUserSharedLine } from "react-icons/ri";
import { CgInsights } from "react-icons/cg";
import Feature from "./Feature";

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
      "Track visits, submissions, submission rates and bounce rates to improve engagement and performance.",
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
        <p className="text-center mt-5 sm:mt-10 text-xl text-white/70">
          From seamless form creation with AI to instant sharing and performance
          tracking, Formulate gives you everything you need to build, share, and
          optimize forms effortlessly.
        </p>
      </div>
      <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
        {features.map(({ title, description, icon }) => (
          <Feature
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
