import React, { useRef, useState, useEffect } from "react";

const Testimonials = () => {
  const testmonialsItems = [
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const sliderRef = useRef(null);
  const slideWidth = useRef(0);

  console.log(slideWidth);

  useEffect(() => {
    if (sliderRef.current) {
      slideWidth.current = sliderRef.current.children[0].offsetWidth + 24; // Include margin
      updateButtonStates();
    }
  }, [testmonialsItems, currentIndex]);

  const nextSlide = () => {
    if (currentIndex < testmonialsItems.length - 1) {
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
    setIsEnd(currentIndex === testmonialsItems.length - 1);
  };

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
      <div className="bg-black py-6 px-6 md:py-16  text-gray-500 rounded-4xl">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {testmonialsItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[min(100%,290px)] md:min-w-100 snap-center"
            >
              <div className="border border-primary p-6 rounded-4xl mb-6 relative before:absolute before:content-[''] before:left-8 before:bottom-[-1rem] before:w-8 before:h-8 before:border before:border-primary before:border-t-0 before:border-l-0 before:rotate-45 before:bg-black">
                <p className="text-[14px]">{item.message}</p>
              </div>
              <div className="ml-10">
                <p className="text-primary">{item.name}</p>
                <p className="text-gray-500 text-[.825rem]">{item.function}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-12">
          <button
            onClick={prevSlide}
            disabled={isBeginning}
            className={`px-4 py-2 rounded-full text-white bg-gray-600 ${
              isBeginning
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700"
            }`}
          >
            &lt;
          </button>

          <div className="flex space-x-2">
            {testmonialsItems.map((_, index) => (
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
    </section>
  );
};

export default Testimonials;
