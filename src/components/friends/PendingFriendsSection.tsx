import { socket, useAuth } from "../../context/AuthProvider";
import { useFriendRequests } from "../../context/FriendsProvider";
import {
  acceptFriendRequest,
  rejectFriendRequest,
} from "../../services/friends";
import { IFriendRequest } from "../../types/friends";
import FriendRequestCard from "./FriendRequestCard";

const PendingFriendsSection = () => {
  const { friendRequests, setFriendList, setFriendRequests } =
    useFriendRequests();
  const { user } = useAuth();

  const handleAcceptFriendRequest = async (senderId: number) => {
    try {
      const receiverId = user?.id;
      const res = await acceptFriendRequest(senderId, receiverId);
      const newFriend = friendRequests?.find(
        (request) => request.Sender.id === senderId
      );
      const filteredFriendReuqests = friendRequests.filter(
        (request) => request.Sender.id === newFriend.id
      );
      if (res) {
        setFriendRequests(filteredFriendReuqests);

        setFriendList((prev) => [...prev, { User: newFriend.Sender }]);
        socket.emit("accept-friend-request", user, senderId);
      }

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectFriendRequest = async (senderId: number) => {
    try {
      const receiverId = user?.id;
      const res = await rejectFriendRequest(senderId, receiverId);
      if (res?.status === 200) {
        const rejectedRequest = friendRequests.find(
          (request: IFriendRequest) => request.Sender.id === senderId
        );

        const filteredFriendReuqests = friendRequests.filter(
          (request: IFriendRequest) => request.Sender.id === rejectedRequest.id
        );

        setFriendRequests(filteredFriendReuqests);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-2 w-4/6">
      <div>
        <span className="text-sm text-gray-400 font-semibold mb-4">
          pending-{friendRequests?.length}
        </span>
        <hr />
      </div>

      {friendRequests.map((request: IFriendRequest) => (
        <FriendRequestCard
          handleAcceptFriendRequest={handleAcceptFriendRequest}
          handleRejectFriendRequest={handleRejectFriendRequest}
          key={request.senderId}
          senderId={request.senderId}
          senderUsername={request.Sender.username}
        />
      ))}
    </div>
  );
};

export default PendingFriendsSection;
