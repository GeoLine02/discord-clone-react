import { MdOutlineDiamond } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCog } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaFolderPlus } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const serverMenu = [
  {
    title: "Boost server",
    icon: MdOutlineDiamond,
  },
  {
    title: "Invite People",
    icon: IoMdPersonAdd,
  },
  {
    title: "Server settings",
    icon: FaCog,
  },
  {
    title: "Create Channel",
    icon: FaCirclePlus,
  },
  {
    title: "Create Category",
    icon: FaFolderPlus,
  },
  {
    title: "Create event",
    icon: FaRegCalendarPlus,
  },
  {
    title: "Notification settings",
    icon: FaBell,
  },
  {
    title: "Privacy settings",
    icon: IoShieldCheckmark,
  },
  {
    title: "Edit server profile",
    icon: BiSolidPencil,
  },
  {
    title: "Hide muted channels",
    icon: MdCheckBoxOutlineBlank,
  },
];

export default serverMenu;
