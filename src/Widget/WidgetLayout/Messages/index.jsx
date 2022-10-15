import { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useScrollBottom } from "../../../hooks/useScrollBottom";
import ThemeContext from "../../ThemeContext";
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
  const theme = useContext(ThemeContext);

  const { widgetColor } = theme;
  const messages = useSelector((state) => state.messageState.messages);
  const userGreeted = useSelector((state) => state.messageState.userGreeted);
  const bottomRef = useScrollBottom(messages);
  console.log(messages);
  let tempMessages = messages.map((message, idx)=>{
    console.log(message);
    if(message.messageType ==='text' && message.sender==='USER'){
      return <UserTextmessage messageItem={message} key={idx}/>
    }
    
  })

  return <MessagesDiv
    className="absolute top-20 flex h-[72%] w-full flex-col space-y-1 overflow-y-auto rounded-t-2xl border-[0px]  bg-white p-2 pt-2"
    widgetColor={widgetColor}
  >
    {tempMessages}
  </MessagesDiv>;
};
