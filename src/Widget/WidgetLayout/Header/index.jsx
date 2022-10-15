import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { motion } from "framer-motion";
export const Header = () => {
  const theme = useContext(ThemeContext);
  const { widgetColor, botSubTitle, botTitle, botAvatar, textColor } = theme;
  console.log(textColor);
  return (
    <div
      className="relative flex h-28 cursor-default items-center space-x-4  rounded-t-[1.8rem]  p-2 shadow-lg drop-shadow"
      style={{ backgroundColor: widgetColor, color: textColor }}
    >
      <div
        className="shrink-0 rounded-full border-[1px]  p-2"
        style={{ borderColor: textColor }}
      >
        <img className="h-12 w-12" src={botAvatar} alt="Bot Logo" />
      </div>
      <div className="w-full ">
        <div className="text-xl font-medium">{botTitle}</div>
        <p className="">{botSubTitle}</p>
      </div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex  "
        onClick={() => {}}
      >
        <Bars3BottomRightIcon className=" h-7 w-7" />
      </motion.div>
    </div>
  );
};
