import { MardownText, formattedTs } from "../utils";

import AppContext from "../../../AppContext";
import { useContext } from "react";

export const UserTextmessage = ({ messageItem }) => {
  const { text, ts } = messageItem;
  const appContext = useContext(AppContext);
  const { textColor, userMsgBackgroundColor } = appContext;

  return (
    <div className=" flex flex-row-reverse ">
      <div className="mt-4 mb-2 flex max-w-[80%] flex-col items-end justify-end ">
        <div
          className="items-end break-words break-all  rounded-t-[20px]  rounded-br-[5px] rounded-bl-[20px] border-[0.5px] bg-white px-[10px] py-[6px] text-sm "
          style={{ color: textColor, backgroundColor: userMsgBackgroundColor }}
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
