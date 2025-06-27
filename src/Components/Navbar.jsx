import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Tooltip } from "react-tooltip";
import { Link, NavLink } from "react-router";
import { Bounce, toast } from "react-toastify";
import ThemeToggle from "../Utilities/ThemeToggle";
import UseLogo from "../Utilities/useLogo";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("sign Out Successfully");
        toast("You have successfully logged out", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const linksNav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allplants">All Plants</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addplants">Add Plant</NavLink>
          </li>
          <li>
            <NavLink to="/myplants">My Plants</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar   dark:bg-base-300 glass  px-4 sm:px-6 lg:px-8  border-0 shadow-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden pl-0 pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {linksNav}
            </ul>
          </div>
          <Link to="/">
            {/* <h3 className="text-xl pl-0 md:text-2xl lg:text-3xl font-bold ">
              Plant<span className="text-primary">Tick</span>
            </h3> */}
            <UseLogo className="w-26  md:w-44"></UseLogo>
          </Link>
          {/* <Link to="/">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              <span className="inline-block bg-white text-primary px-3 py-1 rounded-2xl">Plant</span>
              <span className="text-white ml-2">Tick</span>
            </h3>
          </Link> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linksNav}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex gap-2 items-center justify-center">
              <img className="h-10 w-10 rounded-2xl object-cover " src={user.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left" />
              <Tooltip id="my-tooltip" />
              <button onClick={handleLogOut} className="hover:bg-red-600 btn btn-primary btn-sm md:btn-md rounded-2xl text-sm md:text-base ml-1  mr-3 md:mr-0">
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex flex-row flex-nowrap gap-2">
              <NavLink className="btn btn-primary px-2 py-1 md:btn-md md:text-base rounded-2xl text-sm " to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-primary px-2 py-1 md:btn-md md:text-base rounded-2xl text-sm" to="/register">
                Register
              </NavLink>
            </div>
          )}
          <div className="ml-[2px] md:ml-1">
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
