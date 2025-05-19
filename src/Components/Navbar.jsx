import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { NavLink } from "react-router";

const Navbar = () => {
  const linksNav = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink>All Plant</NavLink>
      </li>
      <li>
        <NavLink to="addplants">Add Plant</NavLink>
      </li>
      <li>
        <NavLink>My Plant</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden pl-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {linksNav}
            </ul>
          </div>
          <a className=" text-xl pl-0">PlantTrick</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linksNav}</ul>
        </div>
        <div className="navbar-end gap-2">
          <LuUserPlus size={25} />
          <NavLink>Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
