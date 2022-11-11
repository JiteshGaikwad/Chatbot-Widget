import { useEffect, useRef } from "react";

export const useDetectClickOutside = ({ setShowModal }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef && modalRef.current) {
        if (!modalRef.current.contains(event.target)) {
          setShowModal(false);
        }
      }
    }
    function handleKeyPress(e) {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [modalRef, setShowModal]);
  return modalRef;
};
