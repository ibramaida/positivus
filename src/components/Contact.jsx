import React from "react";

import formImg from "../assets/images/form/form.png";

const Contact = () => {
  return (
    <section
      id="raq"
      className="space-y-8 mb-16 max-w-[min(100%-2rem,1440px)] mx-auto"
    >
      <div className="flex flex-col gap-6 items-center md:flex-row md:w-2xl">
        <h2 className="bg-primary p-2 leading-none rounded-lg text-nowrap">
          Contact Us
        </h2>
        <p className="text-center md:text-left text-gray-500 text-[12px]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 bg-gray-200 rounded-4xl">
        <form className="flex flex-col gap-6 col-span-2 px-6 py-12 md:p-12">
          <div className="flex space-x-8 mb-4 flex-grow-1 justify-center md:justify-normal">
            {/* Say Hi Radio Box */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="radioGroup"
                className="accent-[#b9ff66] h-5 w-5 rounded-full  border-black bg-white focus-visible:outline-2"
              />
              <span className=" text-black">Say Hi</span>
            </label>

            {/* Get a Quote Radio Box */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="radioGroup"
                className="accent-[#b9ff66] h-5 w-5 border-black bg-white focus-visible:outline-2"
              />
              <span className=" text-black">Get a Quote</span>
            </label>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-black block after:ml-0.5 after:text-black after:content-['*']"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border-1 border-black bg-white rounded-[6px] w-full  px-4 py-1"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-black block after:ml-0.5 after:text-black after:content-['*']"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="border-1 border-black bg-white rounded-[6px] w-full  px-4 py-1"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-black block after:ml-0.5 after:text-black after:content-['*']"
            >
              Message:
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Enter your message"
              className="border-1 border-black bg-white rounded-[6px] w-full  px-4 py-1"
            />
          </div>
          <button className="btn">Send Message</button>
        </form>
        <div className="hidden md:flex text-right items-center justify-end">
          <img className="max-h-[500px]" src={formImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
