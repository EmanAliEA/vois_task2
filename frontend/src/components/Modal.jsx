import { createPortal } from "react-dom";
function Modal({ children }) {
  console.log("modal");
  return createPortal(
    <dialog className="bg-gray-300/15 flex items-center justify-center  py-30 w-screen m-auto h-screen  outline-none ">
      {children}
    </dialog>,
    document.querySelector("#modal")
  );
}

export default Modal;
