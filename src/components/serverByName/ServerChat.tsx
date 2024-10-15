import { useState } from "react";
import ChatInput from "../shared/ChatInput";
import MessageList from "../shared/MessageList";

const ServerChat = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="px-4 py-4 w-full max-h-screen text-white">
      <MessageList />

      <ChatInput message={message} setMessage={setMessage} />
    </div>
  );
};

export default ServerChat;
