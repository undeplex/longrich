import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="border-b group">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 focus:outline-none hover:bg-gray-100 transition-colors duration-300"
            aria-expanded={activeIndex === index}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Accordion {item}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 group-hover:text-blue-500 ${
                  activeIndex === index ? "rotate-180 text-blue-500" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-4">
              <p>This is the content of accordion {item}.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;