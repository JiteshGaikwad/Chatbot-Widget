import moment from "moment";
import { BotMessage } from "./BotMessage";
import { UserTextmessage } from "./UserMessage";

export const Chats = ({ messages }) => {
  let i = 0;
  let tempMessages = [];
  let messageCount = messages.length;

  while (i < messageCount) {
    let previous = messages[i - 1];
    let current = messages[i];
    let next = messages[i + 1];
    let isUser = current.sender === "USER";
    const ts = current.ts;
    let currentMoment = moment(ts);
    let prevBySameAuthor = false;
    let nextBySameAuthor = false;
    let startsSequence = true;
    let endsSequence = true;
    let showTimestamp = true;

    if (previous) {
      let previousMoment = moment(previous.ts);
      let previousDuration = moment.duration(
        currentMoment.diff(previousMoment)
      );
      prevBySameAuthor = previous.sender === current.sender;

      if (prevBySameAuthor && previousDuration.as("hours") < 1) {
        startsSequence = false;
      }

      if (previousDuration.as("hours") < 1) {
        showTimestamp = false;
      }
    }
    if (next) {
      let nextMoment = moment(next.ts);
      let nextDuration = moment.duration(nextMoment.diff(currentMoment));
      nextBySameAuthor = next.sender === current.sender;

      if (nextBySameAuthor && nextDuration.as("hours") < 1) {
        endsSequence = false;
      }
    }
    if (isUser) {
      tempMessages.push(<UserTextmessage messageItem={current} key={i} />);
    } else {
      tempMessages.push(
        <BotMessage
          messageItem={current}
          key={i}
          index={i}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          ts={ts}
        />
      );
    }
    i += 1;
  }
  return tempMessages;
};
