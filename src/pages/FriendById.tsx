import { useParams } from "react-router-dom";
import FriendByIdHeader from "../components/friendById/FriendByIdHeader";
import { useFriendRequests } from "../context/FriendsProvider";
import MessageList from "../components/shared/MessageList";
import { FormEvent, useEffect, useRef, useState } from "react";
import ChatInput from "../components/shared/ChatInput";
import FriendsSideBar from "../components/layout/FriendsSideBar";
import { socket, useAuth } from "../context/AuthProvider";
import { IFriend } from "../types/friends";
import { useChat } from "../context/ChatProvider";
import { getDirectMessages } from "../services/messages";
import { IServer } from "../types/servers";
import { useServer } from "../context/ServerProvider";

const FriendById = () => {
  const { id } = useParams();
  const { friendList } = useFriendRequests();
  const friend = friendList.find(
    (friend: IFriend) => friend?.Friend?.id === Number(id)
  );
  const { user } = useAuth();
  const [message, setMessage] = useState<string>("");
  const { setServers } = useServer();
  const { messageList, setMessageList, contentType } = useChat();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList?.length]);
  useEffect(() => {
    const fetchDirectMessages = async () => {
      const res = await getDirectMessages(user?.id, Number(id));
      setMessageList(res);
    };
    if (user) {
      fetchDirectMessages();
    }
  }, [friend?.id, user?.id]);

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sentDate = Date.now();

    const messageObj = {
      id: messageList.length,
      sender: user,
      receiver: friend?.Friend,
      content: message,
      contentType: contentType,
      sentDate,
    };

    if (message) {
      formRef.current?.reset();
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      setMessage("");
      setMessageList([...messageList, messageObj]);

      socket.emit("send-message-to-friend", messageObj);
    }
  };

  const handleAcceptServerInvitation = (
    serverName: string,
    id: number,
    server: IServer
  ) => {
    const filteredMessageList = messageList.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (message: any) => message.id !== id
    );
    setMessageList(filteredMessageList);
    socket.emit("accept-server-invite", {
      serverName,
      id,
      status: "member",
      user: user,
      friend: friend?.Friend,
    });
    setServers((prev: IServer[]) => [...prev, server]);
  };

  return (
    <div className="min-h-screen max-h-screen flex bg-secondary-gray">
      <FriendsSideBar />
      <div className="w-full">
        <FriendByIdHeader friend={friend} />
        <form
          ref={formRef}
          onSubmit={handleSubmitForm}
          className="p-3 flex flex-col text-white justify-between h-[94%]"
        >
          <MessageList
            friendId={Number(id)}
            handleAcceptServerInvitation={handleAcceptServerInvitation}
            ref={scrollRef}
          />
          <ChatInput ref={inputRef} message={message} setMessage={setMessage} />
        </form>
      </div>
    </div>
  );
};

export default FriendById;
