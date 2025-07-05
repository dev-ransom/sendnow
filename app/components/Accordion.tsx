"use client";
import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
    }
  };

  const handleMouseLeave = () => {
    if (isOpen && !isAnimating) {
      setIsAnimating(true);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!contentRef.current) return;

    const handleAnimationEnd = () => {
      setIsAnimating(false);
    };

    contentRef.current.addEventListener("transitionend", handleAnimationEnd);
    return () => {
      contentRef.current?.removeEventListener(
        "transitionend",
        handleAnimationEnd
      );
    };
  }, []);

  return (
    <div
      ref={accordionRef}
      onMouseLeave={handleMouseLeave}
      className="rounded-lg mb-2 overflow-hidden"
    >
      {/* Header with fixed height of 200px */}
      <div
        onClick={toggleAccordion}
        className={`flex justify-between items-center p-3 bg-[#0368FF1A] cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]
          ${
            isOpen
              ? "opacity-0 h-0 -translate-y-2"
              : "opacity-100 h-[70px] translate-y-0"
          }
          ${isAnimating ? "overflow-hidden" : ""}
        `}
      >
        <span className="font-medium">{title}</span>
        <span
          className={`text-lg transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>

      {/* Content with fixed height of 500px */}
      <div
        ref={contentRef}
        className={`
          bg-[#18B1FF]
          transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]
          ${
            isOpen ? " opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }
          ${isAnimating ? "overflow-hidden" : ""}
        `}
        style={{
          transitionDelay: isOpen ? "100ms" : "0ms",
        }}
      >
        <div className="px-4 pb-2 h-[80px] flex flex-col justify-between">
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
