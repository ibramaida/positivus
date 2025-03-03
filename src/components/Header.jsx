import React from "react";
import logoBlack from "../assets/images/logo_black.svg";

const Header = () => {
  return (
    <header className="wrapper flex justify-between items-center py-8  mx-auto mb-10">
      <div>
        <img src={logoBlack} alt="logo" />
      </div>
      <ul className="hidden lg:flex md:gap-[clamp(1rem,1vw+.5rem,2rem)] items-center">
        <li>
          <a className="nav-link" href="about-us">
            About us
          </a>
        </li>
        <li>
          <a className="nav-link" href="services">
            Services
          </a>
        </li>
        <li>
          <a className="nav-link" href="use-cases">
            Use Cases
          </a>
        </li>
        <li>
          <a className="nav-link" href="pricing">
            Pricing
          </a>
        </li>
        <li>
          <a className="nav-link" href="blog">
            Blog
          </a>
        </li>
        <li>
          <a className="nav-link border border-gray-500" href="request-quote">
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
