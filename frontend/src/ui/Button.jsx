function Button({ children, onClick, style = "" }) {
  return (
    <button
      className={`bg-sky-600 cursor-pointer hover:bg-sky-800 text-white text-xl rounded-xl lg:py-1 lg:px-10 focus:outline-none capitalize self-center ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
