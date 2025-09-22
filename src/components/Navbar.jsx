import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
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
              className="menu menu-sm dropdown-content bg-base-200 z-[1] mt-3 p-2 shadow"
            >
              nav links
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {/*  TODO NAV LINKS*/} nav links
          </ul>
        </div>
        <div className="navbar-end">
          {/*  THEME SETUP*/}
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
