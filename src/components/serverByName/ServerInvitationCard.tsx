import { IUser } from "../../types/user";
import { FaDiscord } from "react-icons/fa";

interface IFriendInvitationCardProps {
  friend: IUser;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleServerInvitation: (friendId: number) => Promise<any>;
}

const ServerInvitationCard = ({
  friend,
  handleServerInvitation,
}: IFriendInvitationCardProps) => {
  return (
    <div className="flex items-center justify-between w-full hover:bg-hover-gray">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-500 w-12 aspect-square rounded-full flex items-center justify-center">
          <FaDiscord size={30} />
        </div>
        <h1 className="text-lg font-medium">{friend.username}</h1>
      </div>
      <button
        onClick={() => handleServerInvitation(friend.id)}
        className="border-green-500 border rounded-sm p-2 hover:bg-green-500"
      >
        invite
      </button>
    </div>
  );
};

export default ServerInvitationCard;
