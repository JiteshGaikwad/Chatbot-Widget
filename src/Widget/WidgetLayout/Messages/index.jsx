import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useScrollBottom } from "../../../hooks/useScrollBottom";
import AppContext from "../../AppContext";
import { BotTyping } from "./BotMessage/BotTyping";
import { Chats } from "./Chats";
import {
  fetchBotResponse,
  setUserGreeted,
  setUserTypingPlaceholder,
  toggleBotTyping,
  toggleUserTyping,
} from "./messageSlice";

const MessagesDiv = styled.div`
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: "transparent"

}
/* Handle */
::-webkit-scrollbar-thumb {
  
  border-radius:20px;
  background-clip: "padding-box";
  background: ${(props) => props.widgetColor}; /* color of the scroll thumb */,
  border-radius: "20px"; /* roundness of the scroll thumb */,
  border: "none"; /* creates padding around scroll thumb */,
}
`;
export const Messages = () => {
  const dispatch = useDispatch();
  const appContext = useContext(AppContext);

  const { widgetColor, initialPayload, rasaServerUrl, userId } = appContext;
  const { messages, userGreeted } = useSelector((state) => state.messageState);
  const bottomRef = useScrollBottom(messages);
  useEffect(() => {
    if (!userGreeted && messages.length < 1) {
      dispatch(setUserGreeted(true));
      dispatch(setUserTypingPlaceholder("Please wait while bot is typing..."));
      dispatch(toggleBotTyping(true));
      dispatch(toggleUserTyping(false));
      dispatch(
        fetchBotResponse({
          rasaServerUrl,
          message: initialPayload,
          sender: userId,
        })
      );
    }
  }, [
    dispatch,
    initialPayload,
    messages.length,
    rasaServerUrl,
    userGreeted,
    userId,
  ]);
  return (
    <MessagesDiv
      className="absolute top-[17%] flex h-[72%] w-full flex-col space-y-1 self-start overflow-y-auto rounded-t-[1.2rem] bg-white p-2 pt-2"
      widgetColor={widgetColor}
    >
      <Chats messages={messages} />
      <BotTyping />
      <div ref={bottomRef}></div>
    </MessagesDiv>
  );
};
