import { createContext, useEffect, useContext, useState } from "react";
import { getSocket } from "./AuthProvider";
import { IMessage, IServerMessage } from "../types/messages";
import MessageSound from "../assets/sounds/Discord notification - sound effect.mp3";

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
  const [serverMessageList, setServerMessageList] = useState<
    [] | IServerMessage[]
  >([]);
  const socket = getSocket();
  const messageNotificationSound = new Audio(MessageSound);

  useEffect(() => {
    socket.on("message-received-from-friend", (messageObj) => {
      setMessageList([...messageList, messageObj]);
      messageNotificationSound.play();
    });
  }, [messageList]);

  useEffect(() => {
    socket.on("message-received-on-server", (messageObj) => {
      setServerMessageList([...serverMessageList, messageObj]);
    });
  }, [serverMessageList, socket]);

  return (
    <ChatContext.Provider
      value={{
        messageList,
        setMessageList,
        contentType,
        setContentType,
        serverMessageList,
        setServerMessageList,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
