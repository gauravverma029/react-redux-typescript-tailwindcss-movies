import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/O_Shopping-Logo.wine.svg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <div className="shadow-xs lg:px-20">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2 lg:p-4">
          <div className={`w-full block flex-grow flex items-center w-auto`}>
            <div className="text-sm flex-grow flex flex-row ">
              <div onClick={handleMobileMenuToggle} className="block mt-4 inline-block mt-0 text-red-600 hover:text-red-700 mr-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <a href="#responsive-header" className="block mt-4 inline-block mt-0 text-teal-100 hover:text-red-700	 mr-4  hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>

              <a href="#responsive-header" className="block mt-4 inline-block mt-0 text-teal-100 hover:text-red-700	 mr-4 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </div>
            <div className="flex items-center h-2">
              <img src={Logo} alt="" className="w-28 sm:w-48 h-auto relative top-2" />
            </div>
            <div className="text-sm flex-grow flex flex-row-reverse ">
              <a href="#responsive-header" className="block mt-4 inline-block mt-0 text-teal-100 hover:text-red-700	 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </a>
              <a href="#responsive-header" className="block mt-4 inline-block mt-0 text-teal-100 hover:text-red-700	  mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div className={`bg-gray-900 ${mobileMenu ? "block" : "hidden"} lg:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" to="/">
              Home
            </Link>
            <Link className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" to="/about">
              About
            </Link>
            <Link className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" to="/contact">
              Contact
            </Link>
          </div>
          <div className="p-2 text-center">
            <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">Our Collections</div>
          </div>
        </div>

        <div className="sm:flex sm:justify-center sm:items-center py-4 w-full flex-grow flex items-center w-auto  mt-4 hidden">
          <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0 hover:text-red-700 text-lg" to="/">
            Home
          </Link>
          <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0 hover:text-red-700 text-lg" to="/about">
            About
          </Link>
          <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0 hover:text-red-700 text-lg" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
