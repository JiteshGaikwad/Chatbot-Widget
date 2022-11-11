import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { motion } from "framer-motion";
export const Header = () => {
  const theme = useContext(AppContext);
  const { botSubTitle, botTitle, botAvatar, chatHeaderCss } = theme;
  const { textColor, backgroundColor, enableBotAvatarBorder } = chatHeaderCss;
  return (
    <div
      className="relative flex h-[20%]  cursor-default items-center space-x-4  rounded-t-[1.8rem]  p-2 shadow-lg drop-shadow"
      style={{ backgroundColor, color: textColor }}
    >
      <div
        className="shrink-0 rounded-full border-[1px]  p-2"
        style={{ borderColor: textColor, borderWidth:  enableBotAvatarBorder }}
      >
        <img className="h-12 w-12" src={botAvatar} alt="Bot Logo" />
      </div>
      <div className="w-full ">
        <div className="text-xl font-semibold antialiased">{botTitle}</div>
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
