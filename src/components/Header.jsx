import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {/*TODO USER */}
        {/*  LINKS*/}
        <div className="flex items-center justify-center gap-x-6">
          <Link to={"/login"} className="link link-hover text-xl sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to={"/register"} className="link link-hover text-xl sm:text-sm">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
