import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isJobSeeker, setIsJobSeeker] = useState(false);
  const handleToggle = () => {
    setIsJobSeeker(!isJobSeeker);
  };

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log("log out successfully"))
      .catch((err) => console.error(err));
  };
  const menuItems = (
    <React.Fragment>
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/`} className={({ isActive }) => (isActive ? " text-white rounded" : " rounded")}>
          Home
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/about`} className={({ isActive }) => (isActive ? " text-white rounded" : " rounded")}>
          About
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/contact`} className={({ isActive }) => (isActive ? " text-white rounded" : " rounded")}>
          Contact
        </NavLink>
      </li>
      <li className="mr-1 my-1 font-semibold">
        <NavLink to={`/login`} className={({ isActive }) => (isActive ? " text-white rounded" : " rounded")}>
          Login
        </NavLink>
        <NavLink to={`/signup`} className={({ isActive }) => (isActive ? " text-white rounded" : " rounded")}>
          Sign up
        </NavLink>
      </li>
    </React.Fragment>
  );
  return (
    <section>
      <div className="navbar bg-primary py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-[70vw] bg-neutral text-white"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={"/"} className="md:text-3xl font-bold font-serif text-black">
            Job Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn normal-case mr-2">
              Log out
            </button>
          ) : (
            ""
          )}
          <button className="btn btn-outline normal-case" onClick={handleToggle}>
            {isJobSeeker ? "Job Seeker" : "Job Poster"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
