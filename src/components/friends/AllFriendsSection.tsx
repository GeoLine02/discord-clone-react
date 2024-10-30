import { useFriendRequests } from "../../context/FriendsProvider";
import { IFriend } from "../../types/friends";
import FriendCard from "./FriendCard";

const AllFriendsSection = () => {
  const { friendList } = useFriendRequests();
  return (
    <div className="w-4/6">
      {friendList.map((friend: IFriend) => (
        <FriendCard key={friend?.Friend?.id} friend={friend?.Friend} />
      ))}
    </div>
  );
};

export default AllFriendsSection;
