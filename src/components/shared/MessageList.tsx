import Message from "./Message";
import { useChat } from "../../context/ChatProvider";

const MessageList = () => {
  const { messageList } = useChat();

  return (
    <div className="min-h-[85%] flex flex-col gap-4">
      {messageList?.map((message: any, index: number) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
