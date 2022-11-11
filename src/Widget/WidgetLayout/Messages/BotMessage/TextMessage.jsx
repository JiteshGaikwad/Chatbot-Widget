import { useContext } from "react";
import AppContext from "../../../AppContext";
import { formattedTs, MardownText } from "../utils";

export const TextMessage = ({
  text,
  startsSequence,
  endsSequence,
  showBotAvatar,
  ts,
}) => {
  const theme = useContext(AppContext);
  const { botAvatar, botMsgColor, botMsgBackgroundColor } = theme;
  const position = [
    "message",
    `${startsSequence ? "start" : ""}`,
    `${endsSequence ? "end" : ""}`,
  ]
    .join(" ")
    .trim();
  let borderStyle;
  if (position === "message start end") {
    borderStyle = "rounded-[20px]";
  }

  if (position === "message start") {
    borderStyle =
      "rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[5px]";
  }

  if (position === "message  end") {
    borderStyle =
      "rounded-tl-[5px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px]";
  }
  if (position === "message") {
    borderStyle =
      "rounded-tl-[5px] rounded-bl-[5px] rounded-br-[20px] rounded-tr-[20px]";
  }

  return (
    <div className="flex space-x-1">
      <div className={`flex w-5 items-end`}>
        <img
          className={`h-5 w-5  rounded-full ${showBotAvatar ? "" : "hidden"}`}
          src={botAvatar}
          alt="Bot Logo"
        />
      </div>
      <div className="flex min-w-[10%] max-w-[80%] flex-col space-x-2">
        <div
          className={`w-fit text-sm ${borderStyle}  whitespace-pre-line  break-words px-[15px] py-[8px]`}
          style={{ color: botMsgColor, backgroundColor: botMsgBackgroundColor }}
          dir="auto"
        >
          <MardownText text={text} />
        </div>
        {showBotAvatar && (
          <div className="text-[10px] italic  text-gray-500">
            {formattedTs(ts)}
          </div>
        )}
      </div>
    </div>
  );
};
