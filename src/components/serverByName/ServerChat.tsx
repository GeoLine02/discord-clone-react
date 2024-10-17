import { useState } from "react";
import ChatInput from "../shared/ChatInput";
import MessageList from "../shared/MessageList";

const ServerChat = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="px-4 py-4 w-full text-white">
      <section className="min-h-[87vh] w-full">
        <MessageList />
      </section>
      <ChatInput message={message} setMessage={setMessage} />
    </div>
  );
};

export default ServerChat;
