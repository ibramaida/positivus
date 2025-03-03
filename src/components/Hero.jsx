import React from "react";
import heroImage from "../assets/images/hero_image.png";

const Hero = () => {
  return (
    <div className="mx-auto">
      <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2 md:content-start">
        <h1 className="self-end">
          Navigating the digital landscape for success
        </h1>
        <div className="md:row-span-3">
          <img src={heroImage} alt="hero" />
        </div>
        <div>
          <p className="text-gray-500 mb-6">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="btn md:col-start-1 md:self-start md:justify-self-start">
            Book a consutation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
