import { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useScrollBottom } from "../../../hooks/useScrollBottom";
import AppContext from "../../AppContext";
import { BotTyping } from "./BotMessage/BotTyping";
import { Chats } from "./Chats";
import { UserTextmessage } from "./UserMessage";

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
  const theme = useContext(AppContext);

  const { widgetColor } = theme;
  const messages = useSelector((state) => state.messageState.messages);
  const bottomRef = useScrollBottom(messages);

  return (
    <MessagesDiv
      className="absolute top-[17%] flex h-[72%] w-full self-start flex-col space-y-1 overflow-y-auto rounded-t-[1.2rem] bg-white p-2 pt-2"
      widgetColor={widgetColor}
    >
      <Chats messages={messages} />
      <BotTyping />
      <div ref={bottomRef}></div>
    </MessagesDiv>
  );
};
