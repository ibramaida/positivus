import React from "react";
import logoWhite from "../assets/images/logoWhite.svg";

const Footer = () => {
  return (
    <footer className="px-4 pt-8 pb-4 md:p-12 bg-black text-white space-y-8 md:space-y-12 max-w-[min(100%,1440px)] mx-auto md:rounded-t-4xl">
      <div className="grid gap-6 justify-items-center text-center md:justify-items-normal md:text-left md:grid-cols-5 md:grid-rows-3 md:gap-8">
        <div>
          <img src={logoWhite} alt="logo" />
        </div>
        <ul className="flex flex-col gap-4 md:flex-row md:justify-center md:col-start-2 md:col-end-5">
          <li>
            <a
              href="#"
              className="border-b border-b-transparent hover:border-b-white focus:border-b-white transition duration-200"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b border-b-transparent hover:border-b-white focus:border-b-white transition duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b border-b-transparent hover:border-b-white focus:border-b-white transition duration-200"
            >
              Use cases
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b border-b-transparent hover:border-b-white focus:border-b-white transition duration-200"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b border-b-transparent hover:border-b-white focus:border-b-white transition duration-200"
            >
              Blog
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-2 text-sm md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-4">
          <h4 className="bg-primary text-black p-1 mx-auto mb-2  leading-none rounded-lg text-nowrap w-fit md:mx-0">
            Contact us:
          </h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className="bg-[#292A32] p-6 md:p-12 grid gap-2 rounded-2xl w-full lg:flex md:items-center md:col-start-3 md:col-end-6 md:row-start-2 md:row-end-4">
          <input
            type="email"
            placeholder="Email"
            className="py-4 px-4 border border-white rounded-xl md:grow-1"
          />
          <button className="md:grow-1 py-4 px-8 bg-(--color-primary) text-black rounded-xl hover:bg-(--color-black) hover:text-primary cursor-pointer transition duration-200 text-nowrap">
            Subscribe to news
          </button>
        </div>
        <div className="flex gap-8 items-center md:justify-end md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-2 md:items-start md:gap-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center shrink-0 text-black bg-white rounded-full hover:animate-pulse "
          >
            <i className="bx bxl-linkedin "></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center shrink-0 text-black bg-white rounded-full hover:animate-pulse "
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center shrink-0 text-black bg-white rounded-full hover:animate-pulse "
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
      <hr className="border-t-[1px] text-[rgb(255,255,255,.2)]" />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center text-sm">
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a
          href="#"
          className="border-b border-b-transparent hover:border-b-white focus:border-b-white transition duration-200"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
