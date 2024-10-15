import { createContext, useEffect, useContext, useState } from "react";
import { socket, useAuth } from "./AuthProvider";
import { getDirectMessages } from "../services/friends";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messageList, setMessageList] = useState<[] | any[]>([]);
  const [directMessages, setDirectMessages] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    socket.on("message-received-from-friend", (messageObj) => {
      setMessageList([...messageList, messageObj]);
    });
  }, [messageList]);

  useEffect(() => {
    const fetchDirectMessages = async () => {
      try {
        const res = await getDirectMessages(userId);
        setDirectMessages(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDirectMessages();
  }, [userId]);

  return (
    <ChatContext.Provider
      value={{ messageList, setMessageList, directMessages }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
