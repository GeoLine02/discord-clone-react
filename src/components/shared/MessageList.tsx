import { forwardRef } from "react";
import Message from "./Message";
import { useChat } from "../../context/ChatProvider";

const MessageList = forwardRef<HTMLDivElement>((props, ref) => {
  const { messageList } = useChat();

  return (
    <div className="overflow-y-auto flex flex-col gap-3">
      {messageList?.map((message: any, index: number) => (
        <Message key={index} message={message} />
      ))}
      {/* invisible div to track the bottom */}
      <div ref={ref}></div>
    </div>
  );
});

MessageList.displayName = "MessageList"; // Optional, for better debugging

export default MessageList;
