import { FaDiscord } from "react-icons/fa";
import { useFriendRequests } from "../../context/FriendsProvider";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const OnlineFriendsSection = () => {
  const { onlineFrindsList } = useFriendRequests();
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`${routes.CHANNEL}/friend-id/${id}`);
  };

  return (
    <div className=" w-5/6">
      {onlineFrindsList?.map((friend: { id: number; username: string }) => (
        <div
          onClick={() => handleNavigate(friend.id)}
          key={friend?.id}
          className="flex items-center gap-2 p-2 hover:bg-hover-gray text-white cursor-pointer"
        >
          <div className="w-12 aspect-square flex items-center justify-center bg-yellow-500 rounded-full">
            <FaDiscord size={30} />
          </div>
          <h1>{friend?.username}</h1>
        </div>
      ))}
    </div>
  );
};

export default OnlineFriendsSection;
