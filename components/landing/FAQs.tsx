"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

const items = [
  {
    question: "How do I create a form with Formulate?",
    answer:
      "Simply drag and drop form elements like text fields, textareas, and selects onto your canvas. Customize each element, then publish your form.",
  },
  {
    question: "Can I track how my form is performing?",
    answer:
      "Yes! Formulate provides insights on visits, submissions, and bounce rates, on your dashboard helping you measure engagement.",
  },
  {
    question: "Do I need coding skills to use Formulate?",
    answer:
      "Not at all! Formulate’s drag-and-drop tool makes it easy for anyone to build professional forms without writing a single line of code.",
  },
  {
    question: "Is there a limit to how many forms I can create?",
    answer:
      "No, Formulate allows you to create unlimited forms, giving you the flexibility to build as many as you need.",
  },
];

type AccordionItemProps = {
  question: string;
  answer: string;
};

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold mr-3">{question}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQs() {
  return (
    <div className="bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24 w-full">
      <div className="px-4 sm:px-6 max-w-screen-xl w-full mx-auto">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
