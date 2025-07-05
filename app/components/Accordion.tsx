"use client";
import React, { useState, useRef } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={accordionRef}
      onMouseLeave={handleMouseLeave}
      className="border border-gray-300 rounded-lg mb-2 overflow-hidden transition-all duration-300"
    >
      {!isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-[60px] justify-between items-center p-3 bg-[#0368FF1A] cursor-pointer select-none transition-colors duration-200"
        >
          <span className="font-medium">{title}</span>
          <span className="text-lg transition-transform duration-200">
            {!isOpen && "+"}
          </span>
        </div>
      )}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out bg-[#18B1FF]
          ${
            isOpen
              ? "opacity-100 h-[80px] py-4"
              : "opacity-0 max-h-0 py-0"
          }
        `}
      >
        <div className="px-4 pb-2 flex justify-between items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
