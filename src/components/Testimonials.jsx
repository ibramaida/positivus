import React from "react";

const testmonialsItems = [
  {
    id: 1,
    name: "John Smith",
    function: "Marketing Director at XYZ Corp",
    message:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    id: 2,
    name: "John Smith",
    function: "Marketing Director at XYZ Corp",
    message:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    id: 3,
    name: "John Smith",
    function: "Marketing Director at XYZ Corp",
    message:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    id: 4,
    name: "John Smith",
    function: "Marketing Director at XYZ Corp",
    message:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    id: 5,
    name: "John Smith",
    function: "Marketing Director at XYZ Corp",
    message:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
];

const Testimonials = () => {
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
      <div className="bg-black py-6 px-6  text-gray-500 rounded-4xl">
        <div className="flex gap-6 overflow-x-auto">
          {testmonialsItems.map((item) => (
            <div className="min-w-[min(100%,290px)] md:min-w-100">
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
      </div>
    </section>
  );
};

export default Testimonials;
