import React from "react";

import formImg from "../assets/images/form/form.png";

const Contact = () => {
  return (
    <section className="space-y-8 mb-16 max-w-[min(100%-2rem,1440px)] mx-auto">
      <div className="flex flex-col gap-6 items-center md:flex-row md:w-2xl">
        <h2 className="bg-primary p-2 leading-none rounded-lg text-nowrap">
          Contact Us
        </h2>
        <p className="text-center md:text-left text-gray-500 text-[12px]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div>
        <form></form>
        <div>
          <img className="w-50 h-75 object-contain" src={formImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
