import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice.js";
import { logoutUser } from "../features/user/userSlice.js";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);
  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              type="button"
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-x-6">
            <Link to={"/login"} className="link link-hover text-xl sm:text-sm">
              Sign in / Guest
            </Link>
            <Link
              to={"/register"}
              className="link link-hover text-xl sm:text-sm"
            >
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
