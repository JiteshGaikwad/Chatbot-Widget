import { useContext } from "react";
import { useSelector } from "react-redux";
import ThemeContext from "../../../ThemeContext";

export const BotTyping = () => {
  const theme = useContext(ThemeContext);

  const botTyping = useSelector((state) => state.messageState.botTyping);
  const { botAvatar, botMsgColor, botMsgBackgroundColor } = theme;
  return (
    botTyping && (
      <div className="flex space-x-1">
        <div className={`flex w-5 items-end`}>
          <img
            className={`h-5 w-5 rounded-full`}
            src={botAvatar}
            alt="Bot Logo"
          />
        </div>
        <div
          className={`flex w-fit min-w-[10%] max-w-[75%] space-x-2 self-start whitespace-pre-line break-words rounded-tl-[20px]  rounded-br-[25px] rounded-tr-[20px] rounded-bl-[5px] px-4 py-3 text-sm text-white`}
          style={{ backgroundColor: botMsgBackgroundColor }}
        >
          <div
            className="animation-delay-32  h-2 w-2 animate-bounce rounded-full bg-white p-1"
            style={{ backgroundColor: botMsgColor }}
          ></div>
          <div
            className="animation-delay-16  h-2 w-2 animate-bounce rounded-full bg-white p-1"
            style={{ backgroundColor: botMsgColor }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-white p-1"
            style={{ backgroundColor: botMsgColor }}
          ></div>
        </div>
      </div>
    )
  );
};
