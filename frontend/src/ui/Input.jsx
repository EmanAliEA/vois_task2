function Input({
  children,
  type = "text",
  style = "",
  isRequired = true,
  check,
  ...props
}) {
  return (
    <div
      className={`flex ${
        check
          ? "flex-col"
          : "border-1 border-s-5 border-s-sky-700 border-gray-300"
      } items-center rounded-s-sm  rounded-e-xl  ${style}`}
    >
      {check ? (
        <label className="text-[1.1rem] self-start" htmlFor={props.name}>
          {children}
        </label>
      ) : (
        <span
          className={` bg-gray-100 p-3 h-full text-center `}
          id="addon-wrapping"
        >
          {children}
        </span>
      )}
      <input
        required={isRequired}
        type={type}
        {...props}
        className={`px-2 py-1 outline-none  h-full ${
          check
            ? " rounded-[.2rem] border-gray-300 border-1 shadow shadow-sky-900/40 py-1.5"
            : "focus:shadow rounded-e-xl focus:shadow-sky-600 focus:ring-1"
        }   focus: ring-sky-800/50 w-full text-gray-500`}
      />
    </div>
  );
}

export default Input;
