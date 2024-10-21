import { FaInbox } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const InboxHeader = () => {
  return (
    <header className="text-white">
      <section className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <FaInbox size={30} />
          <h1 className="font-medium text-xl">Inbox</h1>
        </div>
        <div className="rounded-md bg-primary-gray p-1 cursor-pointer">
          <IoCheckmarkDoneSharp />
        </div>
      </section>
      <section className="border-b border-accent-gray flex items-center">
        <button className="p-2 border-b border-accent-gray hover:border-primary-blue font-medium">
          For You
        </button>
        <button className="p-2 border-b border-accent-gray hover:border-primary-blue font-medium">
          Server Invites
        </button>
        <button className="p-2 border-b border-accent-gray hover:border-primary-blue font-medium">
          Unread
        </button>
      </section>
    </header>
  );
};

export default InboxHeader;
