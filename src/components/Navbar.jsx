import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router";
import { NavLinks } from "./index.js";
import { useEffect, useState } from "react";

const themes = {
  cmyk: "cmyk",
  sunset: "sunset",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.cmyk;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { cmyk, sunset } = themes;
    const newTheme = theme === cmyk ? sunset : cmyk;
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className={"btn btn-primary hidden items-center text-3xl lg:flex"}
          >
            C
          </NavLink>
          {/*  DROPDOWN*/}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="">
              <FaBarsStaggered className="size-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/*  THEME SETUP*/}
          <label htmlFor="toggletheme" className="swap swap-rotate">
            <input type="checkbox" id="toggletheme" onChange={handleTheme} />
            <BsSunFill className="swap-on size-6" />
            <BsMoonFill className="swap-off size-6" />
          </label>
          <NavLink
            to={"/cart"}
            className={"btn btn-ghost btn-circle btn-md ml-4"}
          >
            <div className="indicator">
              <BsCart3 className="size-6" />
              <span className="badge badge-sm badge-primary indicator-item"></span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
