import React, { useState, useRef, useEffect } from "react";

const HorizontalSlider = () => {
  const slides = [
    <div className="bg-red-200 p-4">Slide 1</div>,
    <div className="bg-blue-200 p-4">Slide 2</div>,
    <div className="bg-green-200 p-4">Slide 3</div>,
    <div className="bg-yellow-200 p-4">Slide 4</div>,
    // Add more slides...
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slideWidth = useRef(0);

  useEffect(() => {
    if (sliderRef.current) {
      slideWidth.current = sliderRef.current.children[0].offsetWidth + 20; // Include margin
      updateButtonStates();
    }
  }, [slides, currentIndex]);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth.current
      }px)`;
      updateButtonStates();
    }
  }, [currentIndex, slideWidth]);

  const updateButtonStates = () => {
    setIsBeginning(currentIndex === 0);
    setIsEnd(currentIndex === slides.length - 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        ref={sliderRef}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[50%] lg:w-[33.33%] p-5 md:p-10"
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between absolute bottom-4 left-0 right-0 p-4">
        <button
          onClick={prevSlide}
          disabled={isBeginning}
          className={`px-4 py-2 rounded-full text-white bg-gray-600 ${
            isBeginning ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
        >
          &lt;
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isEnd}
          className={`px-4 py-2 rounded-full text-white bg-gray-600 ${
            isEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HorizontalSlider;
