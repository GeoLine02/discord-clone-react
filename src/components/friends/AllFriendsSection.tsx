import { useFriendRequests } from "../../context/FriendsProvider";
import FriendCard from "./FriendCard";

const AllFriendsSection = () => {
  const { friendList } = useFriendRequests();
  return (
    <div className="w-4/6">
      {friendList.map((friend: any) => (
        <FriendCard key={friend?.Friend?.id} friend={friend?.Friend} />
      ))}
    </div>
  );
};

export default AllFriendsSection;
