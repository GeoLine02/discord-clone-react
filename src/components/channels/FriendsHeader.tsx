import { FaInbox, FaUserFriends } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import friendFilterOptions from "../../constants/friendFilterOptions";

const FriendsHeader = () => {
  return (
    <header className="flex items-center justify-between w-full bg-secondary-gray text-white py-2">
      <section className="flex gap-3">
        <div className="flex gap-3 items-center border-r border-gray-600 px-2">
          <FaUserFriends size={30} />
          <h1>Friends</h1>
        </div>
        <div className="flex items-center gap-3">
          {friendFilterOptions.map((option: string) => (
            <button>{option}</button>
          ))}
          <button className="bg-green-600 px-1 whitespace-nowrap rounded-md">
            Add friend
          </button>
        </div>
      </section>
      <section className="flex items-center gap-3">
        <FaInbox size={30} />
        <IoIosHelpCircle size={30} />
      </section>
    </header>
  );
};

export default FriendsHeader;
