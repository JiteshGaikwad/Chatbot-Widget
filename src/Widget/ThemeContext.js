import { createContext } from "react";

const ThemeContext = createContext({
  rasaServerUrl: "",
  initialPayload: "",
  metadata: {},
  botAvatar: "",
  widgetColor: "",
  botTitle: "",
  botSubTitle: "",
  userId:"",
  textColor:"",
  userMsgBackgroundColor: "",
});

export default ThemeContext;
