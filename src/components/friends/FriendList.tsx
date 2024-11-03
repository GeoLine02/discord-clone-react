import { updateFriendDmVisibility } from "../../services/friends/index";
import Friend from "./Friend";
import { useAuth } from "../../context/AuthProvider";
import { IFriend } from "../../types/friends";
import { useFriendRequests } from "../../context/FriendsProvider";
import { v4 as uuidv4 } from "uuid";
const FriendList = () => {
  const { user } = useAuth();
  const { dmVisibleFrinds, setDmVisibleFriends } = useFriendRequests();

  const handleUpdateVisibleFriend = async (
    friendId: number,
    visibility: boolean
  ) => {
    try {
      await updateFriendDmVisibility({
        userId: user?.id,
        friendId,
        visibility,
      });
      const filteredDmFrinds = dmVisibleFrinds.filter(
        (friend: IFriend) => friend?.Friend?.id !== friendId
      );
      setDmVisibleFriends(filteredDmFrinds);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[60%] overflow-y-auto">
      {dmVisibleFrinds?.map((friend: IFriend) => (
        <Friend
          key={uuidv4()}
          friendId={friend?.Friend?.id}
          friendName={friend?.Friend?.username}
          handleUpdateVisibleFriend={handleUpdateVisibleFriend}
        />
      ))}
    </div>
  );
};

export default FriendList;
