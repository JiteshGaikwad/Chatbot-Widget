import { createContext } from "react";

const ThemeContext = createContext({
  rasaServerUrl: "",
  initialPayload: "",
  metadata: {},
  botAvatar: "",
  widgetColor: "",
  botTitle: "",
  botSubTitle: "",
  userId: "",
  textColor: "",
  userMsgBackgroundColor: "",
  botMsgBackgroundColor: "",
  botMsgColor: "",
  userMsgColor: "",
  buttonsCss: {},
  chatHeaderCss:{}
});

export default ThemeContext;
