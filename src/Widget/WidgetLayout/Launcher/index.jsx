import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../../AppContext";
import { setToggleWidget } from "../../widgetSlice";
import { motion, AnimatePresence } from "framer-motion";

import { XMarkIcon } from "@heroicons/react/24/solid";
export const Launcher = () => {
  const dispatch = useDispatch();
  let toggleWidget = useSelector((state) => state.widgetState.toggleWidget);
  const appContext = useContext(AppContext);
  const { widgetColor, botAvatar, textColor } = appContext;
  return (
    <motion.div
      animate={{
        scale: [0, 1.1, 1],
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`fixed right-5 bottom-2 mr-2  inline-flex cursor-default items-center rounded-full  p-2 text-center text-sm font-medium text-white xs:right-0`}
      style={{ backgroundColor: widgetColor,color: textColor}}
      onClick={(e) => {
        e.preventDefault();
        dispatch(setToggleWidget(!toggleWidget));
      }}
    >
      <AnimatePresence>
        {toggleWidget ? (
          <motion.div
            animate={{
              rotate: [0, 90],
            }}
          >
            <XMarkIcon className="h-12 w-12" />
          </motion.div>
        ) : (
          <motion.div>
            <img src={botAvatar} className="h-12 w-12" alt="bot" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
