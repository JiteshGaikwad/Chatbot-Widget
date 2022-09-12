import { useContext } from "react";

import ThemeContext from "../../../ThemeContext";

import { formattedTs, MardownText } from "../utils";

export const UserTextmessage = ({ messageItem }) => {
  const { text, ts } = messageItem;
  const theme = useContext(ThemeContext);
  const { widgetPrimaryColor } = theme;
  return (
    <div className="mt-2 flex flex-row-reverse">
      <div className="flex max-w-[70%] flex-col items-end justify-end">
        <div
          className="items-end break-words rounded-t-[20px] rounded-br-[5px] rounded-bl-[20px] border-[0.5px] bg-white px-[10px] py-[6px] text-sm"
          style={{ color: widgetPrimaryColor, borderColor: widgetPrimaryColor }}
        >
          <MardownText text={text} />
        </div>
        <div className="text-[10px] italic  text-gray-500">
          {formattedTs(ts)}
        </div>
      </div>
    </div>
  );
};
