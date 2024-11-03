import { useEffect, useRef, useState } from "react";
import ChatInput from "../components/shared/ChatInput";
import MessageList from "../components/shared/MessageList";
import { getSocket, useAuth } from "../context/AuthProvider";
import { getServerById } from "../services/servers";
import { IServer } from "../types/servers";
import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatProvider";
import { getChannelMessages } from "../services/messages";
import useScrollToView from "../hooks/useScrollToView";
import { IServerMessage } from "../types/messages";

const ChannelMessagesPage = () => {
  const [message, setMessage] = useState<string>("");
  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [serverByName, setServerByName] = useState<IServer | null>(null);
  const { serverId, channelName } = useParams();
  const { serverMessageList, setServerMessageList } = useChat();
  const socket = getSocket();

  useEffect(() => {
    const fetchServerById = async () => {
      try {
        const res = await getServerById(Number(serverId));
        setServerByName(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerById();
  }, [serverId]);

  const filteredMessages = serverMessageList.filter(
    (message: IServerMessage) => message?.serverId === Number(serverId)
  );

  const [scrollRef] = useScrollToView({
    messageList: serverMessageList,
    setMessageList: setServerMessageList,
  });

  useEffect(() => {
    const fetchChannelMessages = async () => {
      try {
        const res = await getChannelMessages(
          Number(serverId),
          channelName as string
        );
        setServerMessageList(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannelMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverId, channelName]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // prevents form default behavior
    e.preventDefault();

    const liveMessageId =
      [...(serverMessageList || [])].reverse()[0]?.id + 1 || 1;

    const messageObj = {
      id: liveMessageId,
      sender: user,
      serverId: Number(serverId),
      content: message,
      contentType: "text",
      serverName: serverByName?.serverName,
      channelName: channelName,
    };

    if (message) {
      formRef.current?.reset();
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      setMessage("");
      socket.emit("send-message-to-channel", messageObj);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmitForm}
        className="p-3 flex flex-col text-white justify-between h-[94%]"
      >
        <MessageList messageList={filteredMessages} ref={scrollRef} />
        <ChatInput message={message} setMessage={setMessage} ref={inputRef} />
      </form>
    </>
  );
};

export default ChannelMessagesPage;
