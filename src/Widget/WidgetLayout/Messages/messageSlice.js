import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBotResponse } from "../../../utils/helpers";

export const fetchBotResponse = createAsyncThunk(
  "messages/fetchBotResponse",
  async (payload, thunkAPI) => {
    const response = await getBotResponse(payload);
    console.log(response);
    await new Promise((r) => setTimeout(r, 1000));
    return response;
  }
);
const initialState = {
  messages: [],
  botTyping: false,
  userTyping: true,
  userTypingPlaceholder: "Type your message here...",
  userGreeted: false,
};
export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      if (action.payload.sender === "USER") {
        state.messages = state.messages.map((message) => {
          if (message.type === "custom") {
            if (message.text) {
              message = {
                text: message.text,
                sender: "BOT",
                type: "text",
                ts: message.ts,
              };
            }
          }
          if (message.type === "buttons") {
            message.quick_replies = [];
          }
          return message;
        });
      }
      state.messages.push(action.payload);
    },
    resetMessageState: () => {
      return initialState;
    },
    removeAllMessages: (state) => {
      state.messages = [];
    },
    toggleUserTyping: (state, action) => {
      state.userTyping = action.payload;
    },
    toggleBotTyping: (state, action) => {
      state.botTyping = action.payload;
      state.userTypingPlaceholder = action.payload
        ? "Please wait for bot response..."
        : "Type your message here...";
    },
    setUserTypingPlaceholder: (state, action) => {
      state.userTypingPlaceholder = action.payload;
    },
    setUserGreeted: (state, action) => {
      state.userGreeted = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBotResponse.fulfilled, (state, action) => {
      const messages = action.payload;
      for (let index = 0; index < messages.length; index++) {
        const message = messages[index];
        // messageType: text
        if (message?.text) {
          state.messages.push({
            text: message.text,
            sender: "BOT",
            messageType: "text",
            ts: new Date(),
          });
        }

           // messageType: image
        if (message?.image) {
          state.messages.push({
            src: message.image,
            sender: "BOT",
            messageType: "image",
            ts: new Date(),
          });
        }

           // messageType: buttons
        if (message?.buttons) {
          if (message.buttons.length > 0) {
            state.messages.push({
              buttons: message.buttons,
              sender: "BOT",
              messageType: "buttons",
              ts: new Date(),
            });
          }
        }
      }

    });
  },
});

export const {
  addMessage,
  removeAllMessages,
  toggleBotTyping,
  toggleUserTyping,
  setUserTypingPlaceholder,
  setUserGreeted,
  resetMessageState,
} = messagesSlice.actions;

export default messagesSlice.reducer;
