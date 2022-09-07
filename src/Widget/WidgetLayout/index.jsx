import { motion, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "../widgetSlice";
import { Header } from "./Header";
import { Keypad } from "./Keypad";
import { Launcher } from "./Launcher";
import { Messages } from "./Messages";
export const WidgetLayout = ({userId}) => {
  const dispatch = useDispatch();
  let toggleWidget = useSelector((state) => state.widgetState.toggleWidget);

  return (
    <AnimatePresence>
      {toggleWidget && (
        <motion.div
          className="fixed bottom-5 xs:bottom-0 right-5 z-50 flex h-[35rem]  w-[22rem] flex-col   rounded-[2rem]  bg-white  font-lato shadow-md   xs:right-2 xs:h-[85%] xs:w-[95%] "
          animate={{ y: -85 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          key="widget"
        >
          <Header />
          <Messages />
          <Keypad />
        </motion.div>
      )}
      <Launcher />
    </AnimatePresence>
  );
};
