import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import { logout } from "../features/userSlice";
import { getLogout } from "../services/checkUser";

function NavBar() {
  const { isLogin, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <nav
      className={`bg-sky-950 text-white text-center py-3  lg:py-5 w-full  ${
        isLogin ? "flex justify-around" : ""
      }`}
    >
      <h1 className="sm:text-2xl lg:text-3xl">Blog Dashboard</h1>
      {isLogin && (
        <Button
          style="!px-3 lg:!px-5"
          onClick={() => {
            console.log("logout");
            getLogout(user);
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      )}
    </nav>
  );
}

export default NavBar;
