import Message from "./Message";
import { useChat } from "../../context/ChatProvider";

const MessageList = () => {
  const { messageList } = useChat();

  return (
    <div className=" overflow-y-auto flex flex-col gap-3">
      {messageList?.map((message: any, index: number) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
