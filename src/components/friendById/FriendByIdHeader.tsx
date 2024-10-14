import UserCard from "../shared/UserCard";
import { MdPhoneInTalk } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

interface IFriendByIdHeaderProps {
  friend: any;
}

const FriendByIdHeader = ({ friend }: IFriendByIdHeaderProps) => {
  return (
    <header className="flex items-center justify-between w-full p-2 text-white border-primary-gray border-b bg-secondary-gray">
      <UserCard user={friend?.Friend} />
      <section className="flex gap-3 items-center">
        <MdPhoneInTalk size={30} />
        <FaVideo size={30} />
        <FaUserCircle size={25} />
        <FaInbox size={30} />
        <IoIosHelpCircle size={30} />
      </section>
    </header>
  );
};

export default FriendByIdHeader;
