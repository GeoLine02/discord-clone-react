import { FaDiscord } from "react-icons/fa";
import { IFriend } from "../../types/friends";

interface IDirectMessageProps {
  friend: IFriend;
}

const DirectMessage = ({ friend }: IDirectMessageProps) => {
  return (
    <div>
      <div className="w-11 aspect-square rounded-full p-2 bg-yellow-400">
        <FaDiscord />
      </div>
      <h1>{friend.Friend.username}</h1>
    </div>
  );
};

export default DirectMessage;
