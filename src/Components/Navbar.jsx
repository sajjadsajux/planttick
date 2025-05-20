import React, { use } from "react";
import { LuUserPlus } from "react-icons/lu";
import { NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { Tooltip } from "react-tooltip";

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
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink to="/allplants">All Plants</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addplants">Add Plants</NavLink>
          </li>
          <li>
            <NavLink to="myplants">My Plant</NavLink>
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
          {user ? (
            <div className="flex gap-2 items-center justify-center">
              <img className="h-10 w-10 rounded-2xl object-cover" src={user.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left" />
              <Tooltip id="my-tooltip" />

              <button onClick={handleLogOut} className="btn btn-primary">
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <NavLink className="btn btn-primary" to="/login">
                Login
              </NavLink>{" "}
              <NavLink className="btn btn-primary" to="/register">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
