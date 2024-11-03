import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoHelpCircle } from "react-icons/io5";
import Inbox from "../inbox/Inbox";

const ServerHeader = () => {
  return (
    <header className="text-white flex items-center w-full justify-between p-2 bg-secondary-gray border-b border-primary-gray">
      {/* left side */}
      <section className="flex gap-2 items-center">
        <FaHashtag size={30} className="text-gray-500" />
        <h1 className="font-semibold">General</h1>
      </section>
      {/* right side */}
      <section className="text-white flex items-center gap-2">
        <FaBell size={25} />
        <FaUserFriends size={30} />
        <Inbox />
        <IoHelpCircle size={30} />
      </section>
    </header>
  );
};

export default ServerHeader;
