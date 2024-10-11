import { MdOutlineDiamond } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCog, FaRegCalendarPlus } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

interface IServerMenuProps {
  onOpenUserInvitationModal: () => void;
}

const ServerMenu = ({ onOpenUserInvitationModal }: IServerMenuProps) => {
  return (
    <ul className="bg-primary-gray rounded-md w-full text-white p-1 absolute top-14 ">
      <div className="p-2 hover:bg-primary-blue rounded-sm w-full flex justify-between items-center">
        <li>Boost Server</li>
        <MdOutlineDiamond size={20} />
      </div>
      <div
        onClick={onOpenUserInvitationModal}
        className="p-2 hover:bg-primary-blue rounded-sm w-full flex justify-between items-center"
      >
        <li>Invite People</li>
        <IoMdPersonAdd size={20} />
      </div>

      <div className="p-2 hover:bg-primary-blue rounded-sm w-full flex justify-between items-center">
        <li>Server Settings</li>
        <FaCog size={20} />
      </div>
      <div className="p-2 hover:bg-primary-blue rounded-sm w-full flex justify-between items-center">
        <li>Create Channel</li>
        <FaCirclePlus size={20} />
      </div>
      <div className="p-2 hover:bg-primary-blue rounded-sm w-full flex justify-between items-center">
        <li>Create event</li>
        <FaRegCalendarPlus size={20} />
      </div>
    </ul>
  );
};

export default ServerMenu;
