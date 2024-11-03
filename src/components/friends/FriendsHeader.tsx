import { FaUserFriends } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import friendFilterOptions from "../../constants/friendFilterOptions";
import Inbox from "../inbox/Inbox";

interface FriendsHeaderProps {
  setShowSection: React.Dispatch<React.SetStateAction<string>>;
}

const FriendsHeader = ({ setShowSection }: FriendsHeaderProps) => {
  return (
    <header className="flex items-center justify-between w-full border-b border-primary-gray bg-secondary-gray text-white p-2">
      <section className="flex gap-3">
        <div className="flex gap-3 items-center border-r border-gray-600 px-2">
          <FaUserFriends size={30} />
          <h1>Friends</h1>
        </div>
        <div className="flex items-center gap-3">
          {friendFilterOptions.map((option: string) => (
            <button onClick={() => setShowSection(option)} key={option}>
              {option}
            </button>
          ))}
          <button
            onClick={() => setShowSection("addFriend")}
            className="bg-green-600 px-1 whitespace-nowrap rounded-md"
          >
            Add friend
          </button>
        </div>
      </section>
      <section className="flex items-center gap-3">
        <Inbox />
        <IoIosHelpCircle size={30} />
      </section>
    </header>
  );
};

export default FriendsHeader;
