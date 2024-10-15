import Message from "./Message";
import { useChat } from "../../context/ChatProvider";

const MessageList = () => {
  const { messageList } = useChat();

  return (
    <div className="flex flex-col gap-4 min-h-[87vh] max-h-[85vh] overflow-y-auto">
      {messageList?.map((message: any, index: number) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
