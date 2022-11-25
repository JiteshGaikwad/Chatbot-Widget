# Instructions

*Make sure you have set up the Rasa on your system or server.*

## Integration

- Step 1: Since this Chat UI communicates with the Rasa server using `rest` channel, make sure you have added `rest` channel in the `credentials.yml` file
- Once you have developed your bot and you are ready to integrate the bot with the UI, you can start the Rasa server using the below command
  ```
  rasa run -m models --enable-api --cors "*" --debug
  ```
- If you have custom actions, you can start the action server using the below command
    ```
    rasa run actions --cors "*" --debug
    ```

- In your html file, import the `Chatbot Widget` module present inside [`dist/index.js`](../dist/index.js) as shown below

```
  <script>
    !(function () {
      let e = document.createElement("script"),
        t = document.head || document.getElementsByTagName("head")[0];
      (e.src = "./dist/index.js"),
        (e.async = !0),
        (e.onload = () => {
          window.ChatbotWidget.default({
            rasaServerUrl: "http://localhost:5005/webhooks/rest/webhook",
            userId: "jitesh97",
            initialPayload: "/greet",
            metadata: {},
            botAvatar:
              "",
            widgetColor: "#a78bfa",
            textColor: "#4c1d95",
            userMsgBackgroundColor: "#e1d7ff",
            botTitle: "Retail Bot",
            botSubTitle: "Sales & Services Assistant",
            botMsgBackgroundColor: "#f3f4f6",
            botResponseDelay: "",
            chatHeaderCss: {
              textColor: "#4c1d95",
              backgroundColor: "#a78bfa",
              enableBotAvatarBorder: true,
            },
            chatHeaderTextColor: "#4c1d95",
            botMsgColor: "#4b5563",
            userMsgColor: "#4c1d95",
            embedded: false,
            buttonsCss: {
              color: "#4c1d95",
              backgroundColor: "#e1d7ff",
              borderColor: "#4b5563",
              borderWidth: "0px",
              borderRadius: "999px",
              hoverBackgroundColor: "white",
              hoverColor: "#4b5563",
              hoverborderWidth: "1px",
              enableHover: false,
            },
          });
        }),
        t.insertBefore(e, t.firstChild);
    })();
  </script>
```

- Add your Rasa Server URL  to the config to `rasaServerUrl` param

- Now you can open the html file in the browser and test the widget

