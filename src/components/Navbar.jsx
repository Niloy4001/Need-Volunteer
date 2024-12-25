import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import getFromLs from "../utility";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-class" : "default-class"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allPost"
          className={({ isActive }) =>
            isActive ? "active-class" : "default-class"
          }
        >
          All Volunteer Need Posts
        </NavLink>
      </li>
      <li className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className=" font-normal btn-sm m-1">
          My Profile
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow"
        >
          <li>
            <NavLink
              to="/addPost"
              className={({ isActive }) =>
                isActive ? "active-class" : "default-class"
              }
            >
              Add Volunteer need Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manageMyPost"
              className={({ isActive }) =>
                isActive ? "active-class" : "default-class"
              }
            >
              Manage My Posts
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  // implement light dark theme mode
  const [mode, setMode] = useState(getFromLs);

  useEffect(() => {
    // if (mode === "light") {
    // document.getElementById("html").setAttribute('data-theme', mode);
    document.documentElement.setAttribute("data-theme", mode);
    // }
    // if (mode === "dark") {
    //   document.getElementById("html").setAttribute('data-theme', 'dark');
    // }
  }, [mode]);

  const handleMode = () => {
    if (mode === "light") {
      localStorage.setItem("theme", "dark");
      setMode(getFromLs);
    }
    if (mode === "dark") {
      localStorage.setItem("theme", "light");
      setMode(getFromLs);
    }
  };

  return (
    <div>
      <div className="md:hidden">
        <Link
          to={"/"}
          className="btn btn-ghost text-xl md:text-2xl lg:text-3xl font-bold text-center w-full"
        >
          NEED VOLUNTEER
        </Link>
      </div>
      <div className="navbar w-[90%] mx-auto py-0 md:py-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-xl md:text-2xl lg:text-3xl font-bold hidden md:flex"
          >
            NEED VOLUNTEER
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-1">
          <div
            onClick={() => handleMode()}
            className=" shadow-2xl text-[#2B3440] border-[#2B3440]  btn btn-sm   rounded-full"
          >
            {mode === "light" ? <FaRegMoon /> : <MdOutlineLightMode />}
          </div>
          {user ? (
            <>
              {/* Avatar */}
              <div className="dropdown dropdown-end tooltip tooltip-top dropdown-hover" data-tip={user?.displayName}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div className="w-10 rounded-full">
                      <img
                        alt="/"
                        referrerPolicy="no-referrer"
                        src={user?.photoURL}
                      />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <p>{user?.displayName}</p>
                  </li>
                  <li>
                  <button onClick={handleLogOut} className="btn btn-sm">
                Logout
              </button>
                  </li>
                </ul>
              </div>
              {/* <button onClick={handleLogOut} className="btn btn-sm">
                Logout
              </button> */}
            </>
          ) : (
            <>
              <Link to={"/login"} className="btn btn-sm">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-sm">
                Register
              </Link>
            </>
          )}

          {/* Login and Register btn */}
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
