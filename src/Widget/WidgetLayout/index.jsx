import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Keypad } from "./Keypad";
import { Launcher } from "./Launcher";
import { Messages } from "./Messages";
export const WidgetLayout = () => {
  let toggleWidget = useSelector((state) => state.widgetState.toggleWidget);
  // xs:bottom-0   xs:right-2 xs:h-[85%] xs:w-[95%]
  return (
    <AnimatePresence>
      {toggleWidget && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 flex h-[579px] w-[400px]  flex-col rounded-[1.8rem]   bg-white  font-inter   shadow-md"
          animate={{ y: -75 }}
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
