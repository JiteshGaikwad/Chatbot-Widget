import { Buttons } from "./Buttons";
import { Image } from "./Image";
import { TextMessage } from "./TextMessage";

export const BotMessage = ({
  messageItem,
  startsSequence,
  endsSequence,
  index,
}) => {
  const botResponse = [];
  let showBotAvatar = false;

  if (endsSequence) {
    showBotAvatar = true;
  }
  if (messageItem.type === "text") {
    botResponse.push(
      <TextMessage
        startsSequence={startsSequence}
        endsSequence={endsSequence}
        showBotAvatar={showBotAvatar}
        text={messageItem.text}
        key={`${index}_text`}
        ts={messageItem.ts}
      />
    );
  }
  if (messageItem.type === "buttons") {
    botResponse.push(
      <Buttons
        buttons={messageItem.buttons}
        key={`${index}_buttons`}
        showBotAvatar={showBotAvatar}
        ts={messageItem.ts}
        index={index}
        callback={messageItem.callback}
      />
    );
  }

  if (messageItem.type === "image") {
    botResponse.push(
      <Image
        showBotAvatar={showBotAvatar}
        imageUrl={messageItem.src}
        ts={messageItem.ts}
        key={`${index}image`}
      />
    );
  }
  return botResponse;
};
