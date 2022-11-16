import { createContext } from "react";

const AppContext = createContext({
  rasaServerUrl: "",
  initialPayload: "",
  metadata: {},
  botAvatar: "",
  widgetColor: "",
  botTitle: "",
  botSubTitle: "",
  userId: null,
  textColor: "",
  userMsgBackgroundColor: "",
  botMsgBackgroundColor: "",
  botMsgColor: "",
  userMsgColor: "",
  botResponseDelay: "",
  buttonsCss: {},
  chatHeaderCss: {},
  errorMessages: [],
  embedded:false
});

export default AppContext;
