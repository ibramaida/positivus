import React from "react";

const Services = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 items-center md:flex-row md:w-2xl">
        <h2 className="bg-primary p-2 leading-none rounded-lg">Services</h2>
        <p className="text-center md:text-left text-gray-500 text-[12px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid gap-6">
        <div className="flex flex-col relative p-8 bg-gray-200 border rounded-4xl shadow-xl">
          <div>
            <h3 className="bg-primary w-fit">Search engine</h3>
            <h3 className="bg-primary w-fit">optimization</h3>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 absolute bottom-8 left-8"
          >
            <img src="../src/assets/icons/Icon-2.svg" alt="" />
            <span className="hidden md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src="../src/assets/images/services/img6.png"
              className="object-contain size-32 self-center"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col relative p-8 bg-gray-200 border rounded-2xl">
          <div>
            <h3 className="bg-primary w-fit">Search engine</h3>
            <h3 className="bg-primary w-fit">optimization</h3>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 absolute bottom-8 left-8"
          >
            <img src="../src/assets/icons/Icon-2.svg" alt="" />
            <span className="hidden md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src="../src/assets/images/services/img6.png"
              className="object-contain size-32 self-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
