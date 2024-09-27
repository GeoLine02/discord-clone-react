import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

interface IFriendRequestCardProps {
  senderId: number;
  senderUsername: string;
}

const FriendRequestCard = ({ senderUsername }: IFriendRequestCardProps) => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-secondary-gray text-white hover:bg-hover-gray rounded-lg mt-3 ">
      <div className="flex items-center gap-3">
        <div className="bg-pink-500 w-11 aspect-square rounded-full cursor-pointer"></div>
        <span className="font-semibold text-gray-400">{senderUsername}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-600">
        <FaCheckCircle className="cursor-pointer" size={30} />
        <IoIosCloseCircle className="cursor-pointer" size={37} />
      </div>
    </div>
  );
};

export default FriendRequestCard;
