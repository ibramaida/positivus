import React, { useState } from "react";

const Accordion = ({ num, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`px-4 py-8 md:px-8 rounded-4xl shadow-[0_3px_0_rgb(0,0,0)] transition-colors duration-300 ${
        isOpen ? "bg-primary" : "bg-gray-200"
      }`}
    >
      <div
        className="flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-bold">{num}</p>
          <h4>{title}</h4>
        </div>
        <span className="w-8 h-8 leading-8 text-center text-3xl border rounded-full shrink-0">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && (
        <>
          <hr className="my-6" />
          <p>{content}</p>
        </>
      )}
    </div>
  );
};

export default Accordion;
