import React, { use } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AuthContext } from "../Contexts/AuthContext";
import { NavLink } from "react-router";

const Footer = () => {
  const { user } = use(AuthContext);
  return (
    <footer className="bg-primary text-primary-content px-4 sm:px-6 lg:px-8 divide-y">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-10 gap-10">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start items-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            <span className="inline-block bg-white text-primary px-3 py-1 rounded-2xl">Plant</span>
            <span className="text-white ml-2">Tick</span>
          </h3>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-sm flex-1">
          {/* Product */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-green-200">Navigations</h3>
            <ul className="space-y-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allplants">All Plants</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to="/addplants">Add Plant</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myplants">My Plants</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-green-200">Company</h3>
            <ul className="space-y-1">
              <li>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms & Condition</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="uppercase text-green-200">Contact</h3>
            <ul className="space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:support@planttick.com" className="hover:underline">
                  support@planttick.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+880123456789" className="hover:underline">
                  +880 1629202095
                </a>
              </li>
              <li>Address: Sreemangal, Sylhet, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-3 text-center lg:text-right">
          <h3 className="uppercase text-green-200">Social media</h3>
          <div className="flex justify-center lg:justify-end space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-green-300 text-sm">© 2025 PlantTick Team. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
