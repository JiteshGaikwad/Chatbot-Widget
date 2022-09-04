import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../ThemeContext";

const Textarea = styled.textarea`
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: "none";
  }
`;

export const Keypad = () => {
  const theme = useContext(ThemeContext);
  const { widgetColor } = theme;
  return (
    <div className="mt-auto flex  h-[12%] items-center  rounded-t-3xl rounded-b-[2rem]  bg-slate-50">
      <Textarea
        rows="1"
        className={` mx-4 block w-full  resize-none bg-slate-50 p-2.5  text-gray-900 outline-none`}
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className={` inline-flex justify-center rounded-full  p-2 hover:bg-slate-100 `}
        style={{ color: widgetColor }}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <PaperAirplaneIcon className="h-6 w-6 -rotate-45 stroke-[1.1px]" />
      </button>
    </div>
  );
};
