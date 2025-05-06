function Input({ text, id, type = "text", style = "" }) {
  return (
    <div className={`flex flex-col md:gap-1  ${style}`}>
      <label className="text-[1.1rem]" htmlFor={id}>
        {text}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="bg-gray-200   border-none focus:border-none focus:outline-0 ps-2 md:py-0.5 !text-black"
        required
      />
    </div>
  );
}

export default Input;
