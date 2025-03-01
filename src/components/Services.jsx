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
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="card bg-gray-200">
          <div>
            <h3 className="p-1 rounded bg-primary w-fit">Search engine</h3>
            <h3 className="p-1 rounded bg-primary w-fit">optimization</h3>
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
              className="object-contain size-36 self-center"
              alt=""
            />
          </div>
        </div>
        <div className="card bg-primary">
          <div>
            <h3 className="p-1 rounded bg-primary w-fit">Pay-per-click</h3>
            <h3 className="p-1 rounded bg-primary w-fit">advertising</h3>
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
              src="../src/assets/images/services/img3.png"
              className="object-contain size-36 self-center"
              alt=""
            />
          </div>
        </div>
        <div className="card bg-black">
          <div>
            <h3 className="p-1 rounded bg-white text-black w-fit">
              Social Media
            </h3>
            <h3 className="p-1 rounded bg-white text-black w-fit">Marketing</h3>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 absolute bottom-8 left-8"
          >
            <img src="../src/assets/icons/Icon-1.svg" alt="" />
            <span className="hidden text-white md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src="../src/assets/images/services/img1.png"
              className="object-contain size-36 self-center"
              alt=""
            />
          </div>
        </div>
        <div className="card bg-gray-200">
          <div>
            <h3 className="p-1 rounded bg-primary w-fit">Email</h3>
            <h3 className="p-1 rounded bg-primary w-fit">Marketing</h3>
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
              src="../src/assets/images/services/img4.png"
              className="object-contain size-36 self-center"
              alt=""
            />
          </div>
        </div>
        <div className="card bg-primary">
          <div>
            <h3 className="p-1 rounded bg-primary w-fit">Content</h3>
            <h3 className="p-1 rounded bg-primary w-fit">Content</h3>
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
              src="../src/assets/images/services/img2.png"
              className="object-contain size-36 self-center"
              alt=""
            />
          </div>
        </div>
        <div className="card bg-black">
          <div>
            <h3 className="p-1 rounded bg-white text-black w-fit">
              Analytics and
            </h3>
            <h3 className="p-1 rounded bg-white text-black w-fit">Tracking</h3>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 absolute bottom-8 left-8"
          >
            <img src="../src/assets/icons/Icon-1.svg" alt="" />
            <span className="hidden text-white md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src="../src/assets/images/services/img5.png"
              className="object-contain size-36 self-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
