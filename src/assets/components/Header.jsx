import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 max-w-[1440px] mx-auto">
      <div>
        <img src="../src/assets/images/logo_black.svg" alt="logo" />
      </div>
      <ul className="hidden lg:flex md:gap-[clamp(.5rem,3vw,2rem)] items-center">
        <li>
          <a
            className="lg:text-[20px] text-gray-800 px-2 rounded leading-none hover:bg-primary transition-all duration-300"
            href="about-us"
          >
            About us
          </a>
        </li>
        <li>
          <a
            className="lg:text-[20px] text-gray-800 px-2 rounded leading-none hover:bg-primary transition-all duration-300"
            href="services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="lg:text-[20px] text-gray-800 px-2 rounded leading-none hover:bg-primary transition-all duration-300"
            href="use-cases"
          >
            Use Cases
          </a>
        </li>
        <li>
          <a
            className="lg:text-[20px] text-gray-800 px-2 rounded leading-none hover:bg-primary transition-all duration-200"
            href="pricing"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className="lg:text-[20px] text-gray-800 px-2 rounded leading-none hover:bg-primary transition-all duration-300"
            href="blog"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="lg:text-[20px] text-gray-800 px-2 rounded leading-none hover:bg-primary transition-all duration-300"
            href="request-quote"
          >
            Request a quote
          </a>
        </li>
      </ul>
      <div className="lg:hidden">
        <i class="bx bx-menu bx-lg "></i>
      </div>
    </header>
  );
};

export default Header;
