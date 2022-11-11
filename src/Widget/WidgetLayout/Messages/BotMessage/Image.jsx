import { useContext } from "react";
import AppContext from "../../../AppContext";
import { formattedTs } from "../utils";

export const Image = ({ showBotAvatar, imageUrl, ts }) => {
  const appContext = useContext(AppContext);
  const { botAvatar } = appContext;
  return (
    <div className="flex space-x-1">
      <div className={`flex w-5 items-end`}>
        <img
          className={`h-5 w-5 rounded-full ${showBotAvatar ? "" : "hidden"}`}
          src={botAvatar}
          alt="BotAvatar"
        />
      </div>
      <div className="flex  flex-col space-y-1">
        <div
          className={`w-fit min-w-[10%] max-w-[75%] ml-4 self-start whitespace-pre-line  break-words text-sm text-white`}
        >
          <img className="rounded-xl shadow-sm" src={imageUrl} alt="imgAlt" />
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
