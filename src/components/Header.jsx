import React, { useState, useEffect, useRef } from "react";
import logoBlack from "../assets/images/logo_black.svg";
import logoWhite from "../assets/images/logoWhite.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full mb-10 transition-all duration-300 ${
        isScrolled ? "top-4 bg-black/50 backdrop-blur-lg" : "top-0"
      } z-10`}
    >
      <div className="wrapper flex justify-between items-center py-4 md:py-8  mx-auto">
        {/* logo */}
        <a href="/">
          {isScrolled ? (
            <img src={logoWhite} alt="logo" />
          ) : (
            <img src={logoBlack} alt="logo" />
          )}
        </a>

        {/* desktop navigation */}
        <ul
          role="primary navigation"
          className={`hidden lg:flex lg:flex-row lg:gap-[clamp(1rem,1vw+.5rem,2rem)] lg:items-center ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
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
            <a
              className={`nav-link border  ${
                isScrolled ? "border-white" : "border-gray-500"
              }`}
              href="request-quote"
            >
              Request a quote
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className={`lg:hidden cursor-pointer ${
            isScrolled ? "text-white" : " text-black "
          }`}
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* <button
          className="lg:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i class="bx bx-menu bx-lg "></i>
        </button> */}

        {/* mobile overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        />
      </div>
      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-4/5 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isScrolled ? "top-[-1rem] h-screen" : "top-0"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-8 py-16 flex flex-col gap-4">
          <a
            href="#home"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#use-cases"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Use Cases
          </a>
          <a
            href="#pricing"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#blog"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#raq"
            className="nav-link "
            onClick={() => setIsMenuOpen(false)}
          >
            Request a quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
