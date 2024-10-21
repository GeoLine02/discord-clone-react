import { FaInbox } from "react-icons/fa";
import InboxHeader from "./InboxHeader";
import InboxMessageList from "./InboxMessageList";
import { useState } from "react";

const Inbox = () => {
  const [toggleInbox, setToggleInbox] = useState<boolean>(false);

  const handleToggleInbox = () => {
    setToggleInbox(!toggleInbox);
  };

  return (
    <div className="relative">
      <FaInbox
        onClick={handleToggleInbox}
        size={30}
        className="text-white cursor-pointer"
      />
      {toggleInbox && (
        <div className="absolute right-0 top-11 min-w-[600px] rounded-lg border bg-secondary-gray border-gray-600 shadow-2xl z-50">
          <InboxHeader />
          <InboxMessageList />
        </div>
      )}
    </div>
  );
};

export default Inbox;
