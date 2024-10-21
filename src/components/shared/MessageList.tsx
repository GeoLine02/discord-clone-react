import { forwardRef } from "react";
import Message from "./Message";
import { useChat } from "../../context/ChatProvider";
import { v4 as uuid4 } from "uuid";
import { IServer } from "../../types/servers";
import { IMessage } from "../../types/messages";

interface IMessageListProps {
  handleAcceptServerInvitation: (
    serverName: string,
    id: number,
    server: IServer
  ) => void;
  friendId: number;
}

const MessageList = forwardRef<HTMLDivElement, IMessageListProps>(
  ({ handleAcceptServerInvitation }, ref) => {
    const { messageList } = useChat();

    return (
      <div className="overflow-y-auto flex flex-col gap-3">
        {messageList?.map((message: IMessage) => (
          <Message
            handleAcceptServerInvitation={handleAcceptServerInvitation}
            key={uuid4()}
            message={message}
          />
        ))}
        {/* invisible div to track the bottom */}
        <div ref={ref}></div>
      </div>
    );
  }
);

MessageList.displayName = "MessageList"; // Optional, for better debugging

export default MessageList;
