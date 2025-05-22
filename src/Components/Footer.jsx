import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content px-4 divide-y">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-10 space-y-8 lg:space-y-0">
        {/* Logo Section */}
        <div className="lg:w-1/3 ">
          <div href="#" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start space-x-3">
            <img src="" alt="" />
            <h3 className="text-xl  md:text-2xl lg:text-3xl font-bold text-primary bg-white p-2 rounded-2xl md:pl-2">
              Plant<span className="text-black ">Tick</span>
            </h3>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-8 lg:w-2/3 text-sm">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-green-200">Product</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-green-200">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase text-green-200">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Public API
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="hover:underline">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="uppercase text-green-200">Social media</div>
            <div className="flex space-x-3">
              <a href="#" rel="noopener noreferrer" title="Facebook" className="p-1 hover:text-green-300">
                <FaFacebook size={25} />
              </a>
              <a href="#" rel="noopener noreferrer" title="Twitter" className="p-1 hover:text-green-300">
                <FaXTwitter size={25} />
              </a>
              <a href="#" rel="noopener noreferrer" title="Instagram" className="p-1 hover:text-green-300">
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-green-300 text-sm">© 1968 Company Co. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
