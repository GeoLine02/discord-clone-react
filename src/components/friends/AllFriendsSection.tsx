import { useFriendRequests } from "../../context/FriendsProvider";
import FriendCard from "./FriendCard";

const AllFriendsSection = () => {
  const { friendList } = useFriendRequests();

  return (
    <div>
      {friendList.map((friend: any) => (
        <FriendCard key={friend.id} />
      ))}
    </div>
  );
};

export default AllFriendsSection;
