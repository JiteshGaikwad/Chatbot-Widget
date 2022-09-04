import { createContext } from "react";

const ThemeContext = createContext({
  rasaServerUrl: "",
  initialPayload: "",
  metadata: {},
  botAvatar: "",
  widgetColor: "",
  botTitle: "",
  botSubTitle: "",
});

export default ThemeContext;
