import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content px-4 divide-y">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-10 space-y-8 lg:space-y-0">
        {/* Logo Section */}
        <div className="lg:w-1/3">
          <a href="#" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 text-green-200">
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
              </svg>
            </div>
            <span className="text-2xl font-semibold">PlantTick</span>
          </a>
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
