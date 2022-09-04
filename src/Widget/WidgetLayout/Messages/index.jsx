import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../ThemeContext";

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
  <MessagesDiv
    className="absolute top-20 flex h-[72%] w-full flex-col space-y-1 overflow-y-auto rounded-t-2xl border-[0px]  bg-white p-2 pt-2"
    widgetColor={widgetColor}
  ></MessagesDiv>;
};
