import React from "react";
import cta from "../assets/images/cta.svg";

const CTA = () => {
  return (
    <section className=" bg-gray-200 flex justify-between rounded-4xl">
      <div className="flex flex-col gap-6 p-12">
        <h3>Let’s make things happen</h3>
        <p className="max-w-[60ch] text-gray-500">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="btn md:self-start">Get your free proposal</button>
      </div>
      <div className="hidden md:block">
        <img src={cta} alt="call to action" />
      </div>
    </section>
  );
};

export default CTA;
