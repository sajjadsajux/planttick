import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Tooltip } from "react-tooltip";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign Out Successfully");
      })
      .catch((error) => {
        console.log(error.message);
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
      {user && (
        <>
          <li>
            <NavLink to="/addplants">Add Plant</NavLink>
          </li>
          <li>
            <NavLink to="myplants">My Plants</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 ">
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
          <h3 className="text-xl pl-0 md:text-2xl lg:text-3xl font-bold ">
            Plant<span className="text-primary">Tick</span>
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linksNav}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex gap-2 items-center justify-center">
              <img className="h-10 w-10 rounded-2xl object-cover " src={user.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left" />
              <Tooltip id="my-tooltip" />
              <button onClick={handleLogOut} className="hover:bg-red-600 btn btn-primary btn-sm md:btn-md rounded-2xl text-sm md:text-base ml-1">
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <NavLink className="btn btn-primary btn-sm md:btn-md rounded-2xl text-sm md:text-base" to="/login">
                Login
              </NavLink>{" "}
              <NavLink className="btn btn-primary btn-sm md:btn-md rounded-2xl text-sm md:text-base" to="/register">
                Register
              </NavLink>
            </div>
          )}
          <div className="ml-2 md:ml-1">
            <label className="toggle text-base-content">
              <input type="checkbox" value="dark" className="theme-controller" />

              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
