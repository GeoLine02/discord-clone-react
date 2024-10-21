import { createContext, useEffect, useContext, useState } from "react";
import { socket } from "./AuthProvider";
import { IMessage } from "../types/messages";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChatContext = createContext<any>(null);

export const useChat = () => {
  const chatContext = useContext(ChatContext);

  if (!chatContext) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return chatContext;
};

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messageList, setMessageList] = useState<[] | IMessage[]>([]);
  const [contentType, setContentType] = useState<string>("text");

  useEffect(() => {
    socket.on("message-received-from-friend", (messageObj) => {
      setMessageList([...messageList, messageObj]);
    });
  }, [messageList]);

  return (
    <ChatContext.Provider
      value={{ messageList, setMessageList, contentType, setContentType }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
