import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBotResponse } from "../../../utils/helpers";


export const fetchBotResponse = createAsyncThunk(
  "messages/fetchBotResponse",
  async (payload, thunkAPI) => {
    const response = await getBotResponse(payload);
    await new Promise((r) => setTimeout(r, 3000));
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
      if (action.payload.length > 0) {
        action.payload.map((item) => {
          state.messages.push({
            ...item,
            ...{ sender: "BOT", ts: new Date() },
          });
          return false;
        });
        state.botTyping = false;
        state.userTyping = true;
        state.userTypingPlaceholder = "Your message here";
      }
    });
  }
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
