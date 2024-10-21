import { CgMoreO } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";

const InboxMessage = () => {
  return (
    <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-accent-gray">
      <div className="flex items-center gap-2">
        <div className="bg-green-500 w-12 aspect-square rounded-full flex items-center justify-center">
          <FaDiscord size={30} />
        </div>
        <h1>Has accepted your friend request.</h1>
      </div>
      <div className="bg-primary-gray rounded-full">
        <CgMoreO size={25} className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default InboxMessage;
