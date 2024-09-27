import { useFriendRequests } from "../../context/FriendsProvider";
import { IFriendRequest } from "../../types/friends";
import FriendRequestCard from "./FriendRequestCard";

const PendingFriendsSection = () => {
  const { friendRequests } = useFriendRequests();
  return (
    <div className="p-2 w-4/6">
      <div>
        <span className="text-sm text-gray-400 font-semibold mb-4">
          pending-0
        </span>
        <hr />
      </div>

      {friendRequests.map((request: IFriendRequest, index: number) => (
        <FriendRequestCard
          key={index}
          senderId={request.senderId}
          senderUsername={request.Sender.username}
        />
      ))}
    </div>
  );
};

export default PendingFriendsSection;
