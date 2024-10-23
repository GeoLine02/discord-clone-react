import { useEffect, useRef, useState } from "react";
import ChatInput from "../components/shared/ChatInput";
import MessageList from "../components/shared/MessageList";
import { useChat } from "../context/ChatProvider";
import { useAuth } from "../context/AuthProvider";
import { getServerById } from "../services/servers";
import { IServer } from "../types/servers";
import { useParams } from "react-router-dom";
import { getChannelMessages } from "../services/channels";

const ChannelMessagesPage = () => {
  const { serverMessages, setServerMessages } = useChat();
  const [message, setMessage] = useState<string>("");
  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [serverByName, setServerByName] = useState<IServer | null>(null);
  const { serverId, channelName } = useParams();
  const [channelMessages, setChannelMessages] = useState<[] | any[]>([]);

  console.log("channel messages", channelMessages);

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

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sentDate = Date.now();
    const liveMessageId = serverMessages?.reverse()[0]?.id + 1 || 1;

    const messageObj = {
      id: liveMessageId,
      sender: user,
      serverId: Number(serverId),
      content: message,
      contentType: "text",
      sentDate,
      serverName: serverByName?.serverName,
    };

    if (message) {
      formRef.current?.reset();
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      setMessage("");
      setServerMessages([...serverMessages, messageObj]);
    }
  };

  useEffect(() => {
    const fetchChannelMessages = async () => {
      try {
        const res = await getChannelMessages(
          Number(serverId),
          channelName as string
        );
        setChannelMessages(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchChannelMessages();
    }
  }, [serverId, channelName, user]);

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmitForm}
        className="p-3 flex flex-col text-white justify-between h-[94%]"
      >
        <MessageList messageList={channelMessages} />
        <ChatInput message={message} setMessage={setMessage} ref={inputRef} />
      </form>
    </>
  );
};

export default ChannelMessagesPage;
