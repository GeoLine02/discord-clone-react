import { TbMessageCircleFilled } from "react-icons/tb";
import { CgMoreVerticalO } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import UserCard from "../shared/UserCard";
interface IFriendCardProps {
  friend: any;
}

const FriendCard = ({ friend }: IFriendCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${routes.CHANNEL}/friend-id/${friend.id}`);
  };

  return (
    <section
      onClick={handleNavigate}
      className="flex items-center justify-between w-full text-white hover:bg-hover-gray cursor-pointer p-2"
    >
      <UserCard iconSize={25} user={friend} />
      <div className="text-white flex gap-3 items-center">
        <TbMessageCircleFilled className="cursor-pointer" size={30} />
        <CgMoreVerticalO className="cursor-pointer" size={25} />
      </div>
    </section>
  );
};

export default FriendCard;
