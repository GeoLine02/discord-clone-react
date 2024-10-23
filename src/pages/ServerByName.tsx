import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import { getServerById } from "../services/servers";
import { IServer } from "../types/servers";
import ServerSideBar from "../components/layout/ServerSideBar";
import ServerHeader from "../components/layout/ServerHeader";
import MessageList from "../components/shared/MessageList";
import ChatInput from "../components/shared/ChatInput";
import { useChat } from "../context/ChatProvider";
import { socket, useAuth } from "../context/AuthProvider";

const ServerByName = () => {
  const { serverId } = useParams();
  const [serverByName, setServerByName] = useState<IServer | null>(null);
  const { serverMessages, setServerMessages } = useChat();
  const [message, setMessage] = useState<string>("");
  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
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

      socket.emit("send-message-to-server", messageObj);
    }
  };

  return (
    <div className="min-h-screen max-h-screen flex bg-secondary-gray">
      <ServerSideBar serverName={serverByName?.serverName as string} />
      <div className="w-full min-h-full">
        <ServerHeader />
        {/* main */}

        {/* <form
          ref={formRef}
          onSubmit={handleSubmitForm}
          className="p-3 flex flex-col text-white justify-between h-[94%]"
        >
          <MessageList messageList={serverMessages} />
          <ChatInput message={message} setMessage={setMessage} ref={inputRef} />
        </form> */}
      </div>
    </div>
  );
};

export default ServerByName;
