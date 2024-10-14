import { FaDiscord } from "react-icons/fa";

interface IUserCardProps {
  user: any;
  iconSize?: number;
}
const UserCard = ({ user, iconSize }: IUserCardProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-green-500 p-2 aspect-square rounded-full flex items-center justify-center">
        <FaDiscord size={iconSize} />
      </div>
      <h1>{user?.username}</h1>
    </div>
  );
};

export default UserCard;
