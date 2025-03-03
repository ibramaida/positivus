import React from "react";
import icon1 from "../assets/icons/Icon-1.svg";
import icon2 from "../assets/icons/Icon-2.svg";
import icon3 from "../assets/icons/Icon-3.svg";
import icon4 from "../assets/icons/Icon-4.svg";
import icon5 from "../assets/icons/Icon-5.svg";
import icon6 from "../assets/icons/Icon-6.svg";
import icon7 from "../assets/icons/Icon-7.svg";
import icon8 from "../assets/icons/Icon-8.svg";

import img1 from "../assets/images/services/img1.png";
import img2 from "../assets/images/services/img2.png";
import img3 from "../assets/images/services/img3.png";
import img4 from "../assets/images/services/img4.png";
import img5 from "../assets/images/services/img5.png";
import img6 from "../assets/images/services/img6.png";

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
            <img src={icon2} alt="icon" />
            <span className="hidden md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src={img6}
              className="object-contain size-36 self-center"
              alt="Search engine optimization"
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
            <img src={icon2} alt="icon" />
            <span className="hidden md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src={img3}
              className="object-contain size-36 self-center"
              alt="Pay per click advertising"
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
            <img src={icon1} alt="" />
            <span className="hidden text-white md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src={img1}
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
            <img src={icon2} alt="" />
            <span className="hidden md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src={img4}
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
            <img src={icon2} alt="" />
            <span className="hidden md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src={img2}
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
            <img src={icon1} alt="" />
            <span className="hidden text-white md:block">learn more</span>
          </a>
          <div className="flex justify-end size-40 self-end">
            <img
              src={img5}
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
