import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createUserMessage } from "../../../utils/helpers";
import AppContext from "../../AppContext";
import {
  addMessage,
  fetchBotResponse,
  toggleBotTyping,
  toggleUserTyping,
} from "../Messages/messageSlice";

const Textarea = styled.textarea`
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Keypad = () => {
  const dispatch = useDispatch();
  const theme = useContext(AppContext);
  const [userInput, setUserInput] = useState("");
  const userTypingPlaceholder = useSelector(
    (state) => state.messageState.userTypingPlaceholder
  );

  const userTyping = useSelector((state) => state.messageState.userTyping);
  const {  rasaServerUrl, userId, textColor } = theme;

  const handleSubmit = async () => {
    if (userInput.length > 0) {
      dispatch(addMessage(createUserMessage(userInput.trim())));
      setUserInput("");
      dispatch(toggleUserTyping(false));
      dispatch(toggleBotTyping(true));
      dispatch(
        fetchBotResponse({
          rasaServerUrl,
          message: userInput.trim(),
          sender: userId,
        })
      );
    }
  };

  return (
    <div className="mt-auto flex  h-[12%] items-center   rounded-t-3xl rounded-b-[2rem]  bg-slate-50">
      <Textarea
        rows="1"
        className={` mx-4 block w-full resize-none bg-slate-50 p-2.5 text-sm text-gray-900 outline-none ${
          userTyping ? "cursor-default" : "cursor-not-allowed"
        }`}
        placeholder={userTypingPlaceholder}
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
        readOnly={!userTyping}
      />
      <button
        type="submit"
        className={`${
          userInput.trim().length > 1 ? "cursor-default" : "cursor-not-allowed"
        } inline-flex justify-center rounded-full  p-2 hover:bg-slate-100 `}
        style={{ color: textColor }}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <PaperAirplaneIcon className="h-6 w-6 -rotate-45 stroke-[1.1px]" />
      </button>
    </div>
  );
};
