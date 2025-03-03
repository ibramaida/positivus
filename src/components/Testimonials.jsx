import React, { useRef, useState, useEffect } from "react";

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      name: "John Smith 1",
      function: "Marketing Director at XYZ Corp",
      message:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      id: 2,
      name: "John Smith 2",
      function: "Marketing Director at XYZ Corp",
      message:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      id: 3,
      name: "John Smith 3",
      function: "Marketing Director at XYZ Corp",
      message:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      id: 4,
      name: "John Smith 4",
      function: "Marketing Director at XYZ Corp",
      message:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      id: 5,
      name: "John Smith 5",
      function: "Marketing Director at XYZ Corp",
      message:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [maxSlide, setMaxSlide] = useState(0);

  useEffect(() => {
    const calculateResponsive = () => {
      const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
      const newSlidesPerView = isMediumScreen ? 2 : 1;
      setSlidesPerView(newSlidesPerView);
      setMaxSlide(Math.max(slides.length - newSlidesPerView, 0));
    };

    calculateResponsive();
    window.addEventListener("resize", calculateResponsive);
    return () => window.removeEventListener("resize", calculateResponsive);
  }, [slides.length]);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const translateValue = `-${currentSlide * (100 / slidesPerView)}%`;

  return (
    <section className="space-y-8 mt-32 mb-16 max-w-[min(100%-2rem,1440px)] mx-auto">
      <div className="flex flex-col gap-6 items-center md:flex-row md:w-2xl">
        <h2 className="bg-primary p-2 leading-none rounded-lg text-nowrap">
          Testimonials
        </h2>
        <p className="text-center md:text-left text-gray-500 text-[12px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="relative w-full overflow-hidden bg-black pt-6 pb-28 md:pt-12 md:pb-32  text-gray-500 rounded-4xl">
        <div
          className="flex transition-transform duration-300 ease-out scrollbar-hide"
          style={{ transform: `translateX(${translateValue})` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full md:min-w-[50%] flex flex-col px-6"
            >
              <div className="border border-primary p-6 rounded-4xl mb-6 relative before:absolute before:content-[''] before:left-8 before:bottom-[-1rem] before:w-8 before:h-8 before:border before:border-primary before:border-t-0 before:border-l-0 before:rotate-45 before:bg-black">
                <p className="text-[14px]">{slide.message}</p>
              </div>
              <div className="ml-10">
                <p className="text-primary">{slide.name}</p>
                <p className="text-gray-500 text-[.825rem]">{slide.function}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`indicator transition-all ${
                  index === currentSlide
                    ? "bg-primary indicator-selected"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <button className="indicator" />
    </section>
  );
};

export default Testimonials;
