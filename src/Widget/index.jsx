import { persistor, store } from "../store";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { WidgetLayout } from "./WidgetLayout";
import ThemeContext from "./ThemeContext";

export const Widget = (props) => {
  const {
    rasaServerUrl,
    initialPayload,
    metadata,
    botAvatar,
    widgetColor,
    botTitle,
    botSubTitle,
    userId,
    textColor
  } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider
          value={{
            rasaServerUrl,
            userId,
            initialPayload,
            metadata,
            botAvatar,
            widgetColor,
            botTitle,
            botSubTitle,
            textColor
          }}
        >
          <WidgetLayout />
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};

Widget.prototype = {
  rasaServerUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  initialPayload: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  metadata: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  botAvatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  widgetColor: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  botTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  botSubTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  textColor: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Widget.defaultProps = {
  rasaServerUrl: "http://localhost:5005/webhooks/rest/webhook",
  userId: "testUser",
  initialPayload: "/greet",
  metadata: {},
  botAvatar:
    "data:image/png;base64,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",
  widgetColor: "#a78bfa",
  textColor: "#4c1d95",
  botTitle: "Retail Bot",
  botSubTitle: "Sales & Services Assitant",
};
