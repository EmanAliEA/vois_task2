import { FaKey, FaLocationArrow, FaRegUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { checkUser } from "../services/checkUser";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isSign, setIsSign] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSign() {
    setError({});
    setIsSign(true);
  }
  function handleLogin() {
    setError({});
    setIsSign(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const res = checkUser(data, isSign);
    if (isSign) {
      return res ? setError({ emailError: res }) : handleLogin();
    }
    if (!res.user.email) {
      setError(res.error);
      return;
    }
    dispatch(login(res.user));
    e.target.reset();
    navigate("/");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`shadow-xl shadow-sky-900  bg-white rounded-xl m-auto ${
        isSign ? "lg:py-10" : "lg:py-28 mt-5"
      } lg:w-1/2 p-5 gap-5 sm:px-10 lg:px-13  flex flex-col  lg:gap-5`}
    >
      <h2 className="text-xl sm:text-3xl lg:text-3xl font-semibold underline text-center text-sky-900">
        {isSign ? "Signup" : "Login"}
      </h2>
      {isSign && (
        <Input placeholder="UserName" name="name" style="h-10 sm:h-11 lg:h-11">
          <FaRegUser />
        </Input>
      )}
      <Input
        placeholder="Email"
        name="email"
        type="email"
        style="h-10 sm:h-11 lg:h-11"
      >
        <MdEmail />
      </Input>
      {error.emailError && (
        <p className="bg-red-100 p-2 ">{error.emailError}</p>
      )}
      <Input
        placeholder="Password"
        type="password"
        name="password"
        minLength={6}
        style="h-10 sm:h-11 lg:h-11"
      >
        <FaKey />
      </Input>
      {error.passError && <p className="bg-red-100 p-2 ">{error.passError}</p>}

      {isSign && (
        <>
          <Input
            placeholder="Location"
            name="location"
            style="h-10 sm:h-11 lg:h-11"
          >
            <FaLocationArrow />
          </Input>
          <Input placeholder="Job" name="job" style="h-10 sm:h-11 lg:h-11">
            <MdWork />
          </Input>
          <textarea
            name="about"
            id="about"
            placeholder="About"
            rows={3}
            className="resize-none text-gray-500 rounded-[.2rem] border-gray-300 border-1 shadow shadow-sky-900/40 p-1 outline-none"
          ></textarea>
        </>
      )}

      <div className="flex self-end gap-2 !mt-5 !lg:mt-10 lg:gap-3">
        <Button
          style="!text-[1rem] !px-6 md:!text-[1.2rem] lg:!text-[1.2rem]"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          style="!text-[1rem] !px-6 md:!text-[1.2rem] lg:!text-[1.2rem]"
          onClick={handleSign}
        >
          Signup
        </Button>
      </div>
    </form>
  );
}

export default Login;
