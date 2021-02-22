import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-gray-800 py-16 sm:py-20 md:py-24">
        <div className="w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left">
            <h4 className="font-hk font-bold text-white text-xl pb-8">Contact</h4>
            <ul className="list-reset">
              <li className="pb-2 block">
                <a
                  href="mailto:test.email0123@elyssi.com"
                  className="font-hk text-white transition-colors hover:text-primary text-base tracking-wide"
                >
                  test@Shopping.com
                </a>
              </li>

              <li className="pb-2 block">
                <a href="tel:01234567777" className="font-hk text-white transition-colors hover:text-primary text-base tracking-wide">
                  01234567777
                </a>
              </li>

              <li className="pb-2 block">
                <a href="/" className="font-hk text-white transition-colors hover:text-primary text-base tracking-wide">
                  Shopping
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center py-16 lg:py-0">
            <a href="/" className="font-butler text-white text-4xl uppercase tracking-wider">
              Shopping
            </a>
            <div className="flex items-center justify-center pt-5">
              <a href="/" className="group">
                <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                  <i className="bx bxl-facebook text-secondary transition-colors group-hover:text-white"></i>
                </div>
              </a>

              <a href="/" className="group">
                <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                  <i className="bx bxl-twitter text-secondary transition-colors group-hover:text-white"></i>
                </div>
              </a>

              <a href="/" className="group">
                <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                  <i className="bx bxl-instagram text-secondary transition-colors group-hover:text-white"></i>
                </div>
              </a>

              <a href="/" className="group">
                <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                  <i className="bx bxl-pinterest text-secondary transition-colors group-hover:text-white"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="font-hk font-bold text-white text-xl pb-8">Link</h4>
            <ul className="list-reset">
              <li className="pb-2 block">
                <a href="/" className="font-hk transition-colors text-white hover:text-primary text-base tracking-wide">
                  Shop
                </a>
              </li>

              <li className="pb-2 block">
                <a href="/" className="font-hk transition-colors text-white hover:text-primary text-base tracking-wide">
                  Contact Us
                </a>
              </li>

              <li className="pb-2 block">
                <a href="/" className="font-hk transition-colors text-white hover:text-primary text-base tracking-wide">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
