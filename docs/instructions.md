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
- If you're running the Rasa server on a remote server like an EC2 instance, it is necessary to modify the [constants.js](https://github.com/JiteshGaikwad/Chatbot-Widget/blob/main/static/js/constants.js#L2) and replace the localhost with the public IP address of the server.

- Once you have you Rasa server up and running, you can test the bot by running the `index.html` file in the browser.

