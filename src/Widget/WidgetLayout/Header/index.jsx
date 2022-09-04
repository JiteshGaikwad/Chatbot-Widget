import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { motion } from "framer-motion";
export const Header = () => {
  const theme = useContext(ThemeContext);
  const { widgetColor, botSubTitle, botTitle, botAvatar } = theme;
  return (
    <div
      className="relative cursor-default flex h-24 items-center space-x-4  rounded-t-[1.8rem] rounded-b-[1.5rem] p-2 shadow-lg drop-shadow"
      style={{ backgroundColor: widgetColor }}
    >
      <div className="shrink-0 border-[1px] border-white rounded-full p-2">
        <img className="h-12 w-12" src={botAvatar} alt="Bot Logo" />
      </div>
      <div className="w-full text-white ">
        <div className="text-xl font-medium">{botTitle}</div>
        <p className="">{botSubTitle}</p>
      </div>
      <motion.div
      whileHover={{ scale: 1.2 }}
      className="flex  text-white"
      onClick={() => {

      }}
    >
      <Bars3BottomRightIcon className=" h-7 w-7"/>
      </motion.div>
    </div>
  
  );
};
