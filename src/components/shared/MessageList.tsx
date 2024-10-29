import { forwardRef } from "react";
import Message from "./Message";
import { v4 as uuid4 } from "uuid";
import { IServer } from "../../types/servers";
import { IMessage, IServerMessage } from "../../types/messages";

interface IMessageListProps {
  handleAcceptServerInvitation?: (
    serverName: string,
    id: number,
    server: IServer
  ) => void;
  messageList: IMessage[] | IServerMessage[];
  friendId?: number;
  serverId?: number;
}

const MessageList = forwardRef<HTMLDivElement, IMessageListProps>(
  ({ handleAcceptServerInvitation, messageList }, ref) => {
    return (
      <div className="overflow-y-auto flex flex-col gap-3">
        {messageList?.map((message: IMessage | IServerMessage) => (
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

export default MessageList;
