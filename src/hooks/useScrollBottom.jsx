import { useEffect, useRef } from "react";

export const useScrollBottom = (messageStack) => {
  const bottomRef = useRef(null);
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageStack]);
  return bottomRef;
};
