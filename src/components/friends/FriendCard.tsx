import { TbMessageCircleFilled } from "react-icons/tb";
import { CgMoreVerticalO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import UserCard from "../shared/UserCard";
import { IUser } from "../../types/user";
import { useFriendRequests } from "../../context/FriendsProvider";
import { updateFriendDmVisibility } from "../../services/friends";
import { getSocket, useAuth } from "../../context/AuthProvider";
import { IFriend } from "../../types/friends";
import { useState } from "react";
import FriendActionList from "./FriendActionList";
import Modal from "../ui/Modal";
import DeleteFriend from "./DeleteFriend";
interface IFriendCardProps {
  friend: IUser;
}

const FriendCard = ({ friend }: IFriendCardProps) => {
  const navigate = useNavigate();
  const { setDmVisibleFriends, friendList, setFriendList } =
    useFriendRequests();
  const [isActionsVisible, setIsActionsVisible] = useState<boolean>(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState<boolean>(false);
  const { user } = useAuth();
  const handleNavigate = async () => {
    try {
      setDmVisibleFriends((prev: IFriend[]) => {
        const existedFriend = prev.some(
          (existedFriend) => existedFriend.Friend.id === friend.id
        );
        if (existedFriend) return prev;
        return [...prev, { Friend: friend }];
      });
      await updateFriendDmVisibility({
        userId: user?.id,
        friendId: friend?.id,
        visibility: true,
      });
      navigate(`${routes.CHANNEL}/friend-id/${friend?.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisplayFriendActions = () => {
    setIsActionsVisible(!isActionsVisible);
  };

  const handleDisplayDeleteModal = () => {
    setDisplayDeleteModal(!displayDeleteModal);
    setIsActionsVisible(false);
  };

  const handleRemoveFriend = async () => {
    try {
      const socket = getSocket();
      socket.emit("delete-friend", {
        userId: user?.id,
        friendId: friend?.id,
        username: friend.username,
      });
      const filteredFriendList = friendList.filter(
        (friends: IFriend) => friends?.Friend?.id !== friend?.id
      );
      setFriendList(filteredFriendList);
      setDisplayDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-between w-full text-white hover:bg-hover-gray cursor-pointer p-2 px-4 relative z-0">
      <UserCard iconSize={25} user={friend} />
      <div className="text-white flex gap-3 items-center">
        <TbMessageCircleFilled
          onClick={handleNavigate}
          className="cursor-pointer"
          size={35}
        />
        <div className="relative">
          <CgMoreVerticalO
            onClick={handleDisplayFriendActions}
            className="cursor-pointer"
            size={30}
          />
          {isActionsVisible && (
            <FriendActionList
              handleDisplayDeleteModal={handleDisplayDeleteModal}
              handleDisplayFriendActions={handleDisplayFriendActions}
            />
          )}
        </div>
      </div>
      {displayDeleteModal && (
        <Modal>
          <DeleteFriend
            handleRemoveFriend={handleRemoveFriend}
            friendName={friend.username}
          />
        </Modal>
      )}
    </section>
  );
};

export default FriendCard;
