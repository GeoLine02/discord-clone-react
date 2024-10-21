import { useState } from "react";
import { sendFrindRequest } from "../../services/friends";
import { socket, useAuth } from "../../context/AuthProvider";
const AddFriendInput = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [sendingStatus, setSendingStatus] = useState<string | null>(null);
  const { user } = useAuth();
  const senderId = user?.id;

  const handleSendFriendRequest = async () => {
    try {
      const res = await sendFrindRequest(senderId, username);
      socket.emit("send-friend-request", {
        senderUsername: user?.username,
        receiverUsername: username,
        senderId,
        status: "pending",
      });
      setSendingStatus(res.message);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between gap-6 bg-primary-gray text-white rounded-lg px-2 py-2 w-full ${
          isFocused && "border border-primary-blue"
        }`}
      >
        <input
          className="w-full outline-none bg-transparent"
          type="text"
          placeholder="You can add friends with their Discord usernames."
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={handleSendFriendRequest}
          className="p-1 rounded-md bg-primary-blue whitespace-nowrap"
        >
          Send Friend Request
        </button>
      </div>
      {sendingStatus && <p>{sendingStatus}</p>}
    </div>
  );
};

export default AddFriendInput;
