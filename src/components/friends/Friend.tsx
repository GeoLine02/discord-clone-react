import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { FaDiscord } from "react-icons/fa";

interface IFriendProps {
  friendId: number;
  friendName: string;
  handleUpdateVisibleFriend: (
    friendId: number,
    visibility: boolean
  ) => Promise<void>;
}

const Friend = ({
  friendName,
  friendId,
  handleUpdateVisibleFriend,
}: IFriendProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${routes.CHANNEL}/friend-id/${friendId}`);
  };

  return (
    <section
      onClick={handleNavigate}
      className="flex w-full py-2 items-center justify-between text-white px-3 cursor-pointer hover:bg-hover-gray"
    >
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 max-w-11 min-w-11 aspect-square rounded-full cursor-pointer flex place-items-center justify-center">
          <FaDiscord size={30} />
        </div>
        <h1>{friendName}</h1>
      </div>
      <AiOutlineClose
        onClick={() => handleUpdateVisibleFriend(friendId, false)}
      />
    </section>
  );
};

export default Friend;
