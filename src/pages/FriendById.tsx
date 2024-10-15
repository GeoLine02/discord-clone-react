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

const FriendById = () => {
  const { id } = useParams();
  const { friendList } = useFriendRequests();
  const friend = friendList.find(
    (friend: IFriend) => friend.Friend.id === Number(id)
  );
  const { user } = useAuth();
  const [message, setMessage] = useState<string>("");
  const { messageList, setMessageList } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const fetchDirectMessages = async () => {
      const res = await getDirectMessages(user?.id, Number(id));
      setMessageList(res);
    };
    if (user) {
      fetchDirectMessages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, user?.id]);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sentDate = Date.now();

    const messageObj = {
      sender: user,
      sentDate,
      content: message,
      receiver: friend?.Friend,
    };
    if (message) {
      setMessageList([...messageList, messageObj]);

      socket.emit("send-message-to-friend", messageObj);
      setMessage("");
      inputRef.current?.blur();
    }
  };
  return (
    <div className="min-h-screen max-h-screen flex bg-secondary-gray">
      <FriendsSideBar />
      <div className="w-full">
        <FriendByIdHeader friend={friend} />
        <form
          onSubmit={handleSubmitForm}
          className="p-3 flex flex-col text-white justify-between"
        >
          <MessageList />
          <ChatInput ref={inputRef} message={message} setMessage={setMessage} />
        </form>
      </div>
    </div>
  );
};

export default FriendById;
